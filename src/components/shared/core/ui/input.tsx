import type * as React from 'react';

import { cn } from '@/lib/cn';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.ComponentProps<'input'> {
    type: React.HTMLInputTypeAttribute;
    inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
    value?: string;
    icon?: LucideIcon
    placeholder?: string;
    pattern?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
    type = "text",
    inputMode = "text",
    value,
    icon: Icon,
    placeholder = '',
    pattern,
    className = '',
    onChange,
    ...props
}: InputProps) {
    return (
        <div className="relative">
            {Icon && <Icon className="w-4 h-4 text-(--container-fg) text-sm absolute left-10 top-1/2 -translate-y-1/2" />}
            <input
                id='inputId'
                name='inputName'
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={cn(`w-full px-3 py-2 rounded-lg text-sm bg-(--container-bg) border border-(--container-br) 
                    text-(--container-fg) placeholder-(--container-fg-prompt) 
                    hover:border-(--container-sub-nav-br-hover)
                    focus:border-(--container-sub-nav-br-hover) outline-none transition-all`,
                    className)}
            />
        </div>
        // <input
        //     type={type}
        //     value={value}
        //     className={cn(
        //         `w-full p-2.5 rounded-xl text-sm leading-normal
        //        bg-(--container-bg) border border-(--container-br) 
        //        text-(--container-fg) placeholder:text-(--container-input-ph) 
        //        focus:outline-none focus:border-(--container-br) 
        //        focus:bg-(--container-bg)/80 focus:ring-4 focus:ring-(--container-br)/10 
        //        transition-all duration-300`,
        //         className,
        //     )}
        //     inputMode={inputMode}
        //     onChange={onChange}
        //     placeholder={placeholder}
        //     pattern={pattern}
        //     {...props}
        // />
    );
}

export default Input;
