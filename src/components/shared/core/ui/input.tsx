import type * as React from 'react';

import { cn } from '@/lib/cn';

interface InputProps extends React.ComponentProps<'input'> {
    type: React.HTMLInputTypeAttribute;
    inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
    value?: string;
    placeholder?: string;
    pattern?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
    type = "text",
    inputMode = "text",
    value,
    placeholder = '',
    pattern,
    className = '',
    onChange,
    ...props
}: InputProps) {
    return (
        <input
            type={type}
            value={value}
            className={cn(
                `w-full px-4 py-3.5 rounded-xl text-sm 
               bg-slate-800 border border-slate-600 
               text-slate-50 placeholder:text-slate-500 
               focus:outline-none focus:border-slate-400 
               focus:bg-slate-900 focus:ring-4 focus:ring-slate-400/10 
               transition-all duration-300`,
                className,
            )}
            inputMode={inputMode}
            onChange={onChange}
            placeholder={placeholder}
            pattern={pattern}
            {...props}
        />
    );
}

export default Input;
