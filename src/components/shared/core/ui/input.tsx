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
    inputVariant?: 'default' | 'base';
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
    inputVariant = 'default',
    onChange,
    ...props
}: InputProps) {
    return (
        <div className="relative">
            {Icon && <Icon className="w-4 h-4 text-sm absolute left-10 top-1/2 -translate-y-1/2" />}
            <input
                id='inputId'
                name='inputName'
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={cn(`theme-layer-border w-full px-3 py-2 rounded-lg 
                    placeholder-(--color-layer-placeholder) outline-none transition-all
                    hover:theme-layer-secondary-hover-border
                    focus:theme-layer-secondary-hover-border`,
                    inputVariant === 'base' && `theme-layer
                        hover:theme-layer-primary-hover-border focus:theme-layer-primary-hover-border`,
                    className)}
            />
        </div>
    );
}

export default Input;
