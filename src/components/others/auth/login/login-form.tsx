import React, { useState } from "react";
import { Button } from "@core/ui/button";
import FormPassword from "@/components/common/core/form/form-password";
import FormInput from "@/components/common/core/form/form-input";
import ErrorMessage from "@/components/common/error/error-message";
import { LoginFormData, LoginFormErrors } from "@/utils/auth/login-util";
import { useTranslations } from "@/hooks/useTranslations";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@core/form/form";
import Input from "@/components/common/core/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from 'react-hook-form';
import { getLoginFormSchema } from "./login-form.schema";
import { zodResolver } from '@hookform/resolvers/zod';



interface LoginFormProps {
    onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
    onSubmit
}: LoginFormProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState<LoginFormErrors>({});
    const [submitError, setSubmitError] = useState<string>("");

    const { t, isLoading } = useTranslations("login-form");

    if (isLoading) {
        return (
            <div className="text-sm font-light tracking-wide">
                Loading...
            </div>
        );
    }

    const form = useForm<LoginFormData>({
        resolver: zodResolver(getLoginFormSchema({
            email: { requiredMsg: t['email-required'], invalidMsg: t['email-invalid'] },
            password: { requiredMsg: t['password-required'] }
        })),
        defaultValues: { email: '', password: '' },
        mode: 'onBlur',
    });

    const onSubmitHandler = async (data: LoginFormData) => {
        // const res = await login({
        //     email: data.email,
        //     password: data.password,
        //     platform: ESource.WEB,
        //     source: ESource.WEB,
        // });

        // if (res.success) {
        //     // Set redirecting state to prevent form resubmission
        //     trackEvent(EEventName.LOGIN_COMPLETED);
        //     setIsRedirecting(true);
        // }

        // if (res.errors) {
        //     trackEvent(EEventName.LOGIN_FAILED);
        // }

        // handleAuthResponse({
        //     res,
        //     email: data.email,
        //     defaultErrorMessage: 'Login failed',
        //     redirectUrl: getRedirectUrl(searchParams),
        //     router,
        //     setAuthData,
        //     showError: toast.error,
        // });
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmitHandler)}
                className="space-y-6"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                    }
                }}
            >
                <div className="space-y-3">
                    {/* Email */}
                    <FormField
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    className="text-foreground text-sm leading-5 font-medium"
                                    htmlFor="email"
                                >
                                    {t["title"]}
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        className="bg-accent-50 border border-neutral-light-accent shadow-none py-2.5 px-3"
                                        type="email"
                                        placeholder="you@example.com"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    className="text-foreground text-sm leading-5 font-medium"
                                    htmlFor="password"
                                >
                                    {t["password"]}
                                </FormLabel>
                                <div className="relative">
                                    <FormControl>
                                        <Input
                                            className="bg-accent-50 border border-neutral-light-accent shadow-none py-2.5 pl-3 pr-8"
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="********"
                                            onInvalid={(e) => e.preventDefault()}
                                            {...field}
                                        />
                                    </FormControl>
                                    <Button
                                        variant="ghost"
                                        type="button"
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-1 top-1.5 grid place-items-center p-0 h-6 w-6 min-w-0 cursor-pointer text-muted-foreground"
                                    >
                                        {showPassword ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
                                    </Button>
                                </div>
                                <FormMessage />

                                <Button
                                    variant="ghost"
                                    type="button"
                                    onClick={() => { }}
                                    className="ml-auto p-0 text-sm -mt-2 leading-5 font-normal text-muted-foreground hover:text-muted-foreground/80"
                                >
                                    {t["forgot-password"]}
                                </Button>
                            </FormItem>
                        )}
                    />

                </div>
            </form>
        </Form>

    );
};

export default LoginForm;

