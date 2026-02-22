import React from 'react';

interface ButtonProps {
    text: string;
    fullWidth?: boolean;
    onSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ onSubmit, text, fullWidth = true }) => {
    return (
        <button
            type="submit"
            onClick={onSubmit}
            className={`relative py-3 rounded-lg font-semibold text-sm 
               bg-blue-600 border border-blue-600 text-white
               transition-all duration-300 overflow-hidden group
               hover:bg-blue-500 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]
               ${fullWidth ? 'w-full' : 'px-6'}`}
        >
            <span className="relative z-10">
                {text}
            </span>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-0 h-0 rounded-full bg-blue-600/20 
                    group-hover:w-[300px] group-hover:h-[300px] 
                    transition-all duration-600">
            </div>
        </button>
    );
};

export default Button;
