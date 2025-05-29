
import React from "react";

interface WhatsappIconProps {
  size?: number;
  className?: string;
}

const WhatsappIcon: React.FC<WhatsappIconProps> = ({ size = 24, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.6 6.32A7.43 7.43 0 0 0 12.38 4c-4.1 0-7.44 3.33-7.44 7.44 0 1.3.34 2.6 1 3.73L4 20l4.94-1.28c1.08.6 2.3.9 3.53.9 4.1 0 7.44-3.33 7.44-7.43 0-1.97-.86-3.88-2.3-5.15" />
      <path d="m14.5 14.5-1.68-1.21c-.5.39-1.23.83-1.68 1.04-.44.2-.86.3-1.34.24-.76-.08-1.12-.39-1.44-.8-.63-.8-.44-1.81.43-2.82l.44-.44c.35-.35.7-.71.7-1.33s-.35-.98-.7-1.33-1.32-.35-1.68 0C6.83 8.57 6 9.07 6 11.04c0 1.96 1.96 4 1.96 4 2.86 2.86 5.03 1.92 6.01.94 1.01-1 1.39-1.28 1.39-1.28s.43-.3-.86-.2z" />
    </svg>
  );
};

export default WhatsappIcon;
