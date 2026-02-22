import React, { useState } from "react";
import Button from "@/components/common/core/ui/button";
import FormPassword from "@/components/common/core/form/form-password";
import FormInput from "@/components/common/core/form/form-input";
import ErrorMessage from "@/components/common/error/error-message";
import { LoginFormData, LoginFormErrors } from "@/utils/auth/login-util";

interface LoginFormProps {
    onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
    onSubmit
}: LoginFormProps) => {
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState<LoginFormErrors>({});
    const [submitError, setSubmitError] = useState<string>("");


    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Object.keys(errors).length > 0) {
            return;
        }
        onSubmit(formData.email, formData.password);
    }

    return (
        <div>
            <ErrorMessage message={submitError} />
            <form onSubmit={onSubmitHandler} className="relative z-10 space-y-6">
                <FormInput
                    label="Email"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@nexgenguest.com"
                    value={formData.email}
                    // onChange={onChange}
                    errorMsg={submitError || errors.email}
                />
                {/* 
                <div>
                    <FormPassword
                        label="Password"
                        id="password"
                        name="password"
                        placeholder="••••••••"
                        value={formData.password}
                        // onChange={onChange}
                        // onForgotPassword={onForgotPassword}
                        error={!!submitError || !!errors.password}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-xs mt-2 animate-[fadeIn_0.3s_ease-out]">
                            {errors.password}
                        </p>
                    )}
                </div> */}

                <Button text="SUBMIT" />
            </form>
        </div>
    );
};

export default LoginForm;
