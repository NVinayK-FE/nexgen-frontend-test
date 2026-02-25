import React from 'react';
import PasswordInput from '@core/form/form-password';

interface FormPasswordProps {
    label?: string;
    id?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onForgotPassword?: () => void;
    error?: boolean;
}

const FormPassword: React.FC<FormPasswordProps> = ({
    label = "Password",
    id = "password",
    name = "password",
    placeholder = "••••••••••",
    value,
    onChange,
    onForgotPassword,
    error = false
}) => {
    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <label
                    htmlFor={id}
                    className="block text-xs font-medium text-slate-400 uppercase tracking-wider"
                >
                    {label}
                </label>
                {onForgotPassword && (
                    <button
                        type="button"
                        onClick={onForgotPassword}
                        className="text-xs text-slate-400 uppercase tracking-wider hover:text-slate-300 transition-colors cursor-pointer"
                    >
                        Forgot Password
                    </button>
                )}
            </div>
            <div className={error ? 'bg-red-950/70 rounded-xl border border-red-700/90' : ''}>
                <PasswordInput
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default FormPassword;
