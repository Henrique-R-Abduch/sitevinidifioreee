
import { useState, useEffect, useRef } from 'react';

interface UseCountAnimationProps {
  end: number;
  duration?: number;
  startOnView?: boolean;
}

export const useCountAnimation = ({ 
  end, 
  duration = 3000, 
  startOnView = true 
}: UseCountAnimationProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  // Animation frame loop function
  const animate = (timestamp: number) => {
    if (startTimeRef.current === null) {
      startTimeRef.current = timestamp;
    }
    
    const elapsed = timestamp - startTimeRef.current;
    
    // Calculate progress (0 to 1)
    const progress = Math.min(elapsed / duration, 1);
    
    // Use easeOutCubic for a smoother animation
    const easing = 1 - Math.pow(1 - progress, 3);
    
    // Calculate current count based on progress
    const currentCount = Math.floor(easing * end);
    
    setCount(currentCount);
    
    if (progress < 1) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      setCount(end);
      setHasAnimated(true);
    }
  };

  const startAnimation = () => {
    if (!hasAnimated) {
      cancelAnimationFrame(requestRef.current);
      startTimeRef.current = null;
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    if (!startOnView) {
      startAnimation();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startAnimation();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      cancelAnimationFrame(requestRef.current);
    };
  }, [end, duration, hasAnimated, startOnView]);

  return { count, elementRef };
};
