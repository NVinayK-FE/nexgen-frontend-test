import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputPasswordProps {
    id?: string;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const InputPassword: React.FC<InputPasswordProps> = ({
    id = "password",
    name = "password",
    value,
    onChange,
    placeholder = "••••••••••"
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative">
            <input
                type={showPassword ? "text" : "password"}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-4 py-3.5 rounded-xl text-sm 
                 bg-slate-800 border border-slate-600 
                 text-slate-50 placeholder:text-slate-500 
                 focus:outline-none focus:border-slate-400 
                 focus:bg-slate-900 focus:ring-4 focus:ring-slate-400/10 
                 transition-all duration-300 pr-12"
            // required
            />
            <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
            >
                {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                ) : (
                    <Eye className="w-5 h-5" />
                )}
            </button>
        </div>
    );
};

export default InputPassword;
