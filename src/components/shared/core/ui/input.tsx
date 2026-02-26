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
                `w-full p-2.5 rounded-xl text-sm leading-normal
               bg-(--container-bg) border border-(--container-br) 
               text-(--container-fg) placeholder:text-(--container-input-ph) 
               focus:outline-none focus:border-(--container-br) 
               focus:bg-(--container-bg)/80 focus:ring-4 focus:ring-(--container-br)/10 
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
