import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = <T extends HTMLElement>(
  animationClass: string, 
  threshold = 0.1, 
  options: { delay?: number; noInitialHidden?: boolean } = {}
) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, hasAnimated]);

  const style = !isVisible && options.delay ? { transitionDelay: `${options.delay}ms` } : {};


  return { 
    ref, 
    className: isVisible ? animationClass : options.noInitialHidden ? '' : 'opacity-0',
    style
  };
};