import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", showText = true }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 md:w-20 md:h-20"
      >
        {/* Teal shape - Left semi-circle, smaller */}
        <path
          d="M85 140C62.9086 140 45 122.091 45 100C45 77.9086 62.9086 60 85 60V140Z"
          fill="#769491"
        />
        {/* Pink shape - Right semi-circle, larger */}
        <path
          d="M95 190C144.706 190 185 149.706 185 100C185 50.2944 144.706 10 95 10V190Z"
          fill="#F7B2B7"
        />
      </svg>
      
      {showText && (
        <div className="mt-6 text-center tracking-[0.4em] text-brand-dark">
          <h1 className="text-2xl md:text-3xl font-extralight leading-[1.1] uppercase">
            Daniela
          </h1>
          <h1 className="text-2xl md:text-3xl font-extralight leading-[1.1] uppercase">
            Casado
          </h1>
          <div className="w-12 h-px bg-brand-teal/30 mx-auto my-3"></div>
          <p className="text-[9px] md:text-[10px] uppercase font-medium tracking-[0.5em] text-brand-teal/80">
            Diseño Interior
          </p>
        </div>
      )}
    </div>
  );
};
