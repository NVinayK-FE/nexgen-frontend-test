import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from "lucide-react";
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from "@core/ui/button";
import Input from "@/components/common/core/ui/input";
import { LoginFormData } from "@/utils/auth/login-util";
import { useTranslations } from "@/hooks/useTranslations";
import { getLoginFormSchema } from "@/components/others/auth/login/login-form.schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@core/form/form";

interface LoginFormProps {
    onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
    onSubmit
}: LoginFormProps) => {
    const { t, isLoading } = useTranslations("login-form");

    const [showPassword, setShowPassword] = useState(false);

    const messages = {
        emailRequired: t["email-required"],
        emailInvalid: t["email-invalid"],
        passwordRequired: t["password-required"],
    };

    const form = useForm<LoginFormData>({
        resolver: zodResolver(getLoginFormSchema({
            email: { requiredMsg: messages.emailRequired, invalidMsg: messages.emailInvalid },
            password: { requiredMsg: messages.passwordRequired }
        })),
        defaultValues: { email: '', password: '' },
        mode: 'onBlur',
    });

    if (isLoading) {
        return (
            <div className="text-sm font-light tracking-wide">
                Loading...
            </div>
        );
    }

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
        <Form {...form} data-testid="login-form-testid">
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

