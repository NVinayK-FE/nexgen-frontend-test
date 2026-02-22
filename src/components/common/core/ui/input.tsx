import React, { type HTMLInputTypeAttribute } from 'react';

interface InputProps {
    type: HTMLInputTypeAttribute;
    id?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

const Input: React.FC<InputProps> = ({
    type,
    id,
    name,
    placeholder = "you@nexgenguest.com",
    value,
    onChange,
    // required = false
}) => {
    return (
        <input
            type={type}
            id={id || 'input_id'}
            name={name || 'input_name'}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-3.5 rounded-xl text-sm 
               bg-slate-800 border border-slate-600 
               text-slate-50 placeholder:text-slate-500 
               focus:outline-none focus:border-slate-400 
               focus:bg-slate-900 focus:ring-4 focus:ring-slate-400/10 
               transition-all duration-300"
        // required={required}
        />
    );
};

export default Input;
