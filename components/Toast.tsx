
import React from 'react';

interface ToastProps {
  message: string;
  isVisible: boolean;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible }) => {
  return (
    <div 
      className={`
        fixed z-[100] left-1/2 -translate-x-1/2 min-w-[250px]
        bg-brand-cyan color-brand-dark text-center rounded px-4 py-4
        font-bold uppercase tracking-widest text-[12px]
        transition-all duration-500 pointer-events-none
        ${isVisible ? 'bottom-[30px] opacity-100' : 'bottom-0 opacity-0'}
      `}
      style={{
        backgroundColor: '#06b6d4',
        color: '#0a0a0a'
      }}
    >
      {message}
    </div>
  );
};

export default Toast;
