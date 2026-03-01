import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from "lucide-react";
import { zodResolver } from '@hookform/resolvers/zod';

import Button from "@core/ui/button";
import Input from "@core/ui/input";
import { ILoginFormData } from "@/utils/auth/login";
import { useTranslation } from "@/hooks/translation";
import { getLoginFormSchema } from "@common/auth/login/login-form.schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@shared/core/form/form";
import FlexCol from "@/components/shared/core/flex/flex-col";

interface LoginFormProps {
    onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
    onSubmit
}: LoginFormProps) => {
    const { t, isLoading } = useTranslation("login-form");

    const [showPassword, setShowPassword] = useState(false);

    const messages = {
        emailRequired: t["email-required"],
        emailInvalid: t["email-invalid"],
        passwordRequired: t["password-required"],
    };

    const form = useForm<ILoginFormData>({
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

    const onSubmitHandler = async (data: ILoginFormData) => {
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
        <FlexCol>
            <div className="text-(--container-sub-nav-fg-hover) w-full text-center py-2 pb-4">{t['title']}</div>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmitHandler)}
                    className="w-120 space-y-1"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                        }
                    }}
                >
                    {/* Email */}
                    <FormField
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="email" className="text-sm leading-5 font-medium">
                                    {t["email"]}
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        id="email"
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
                                <FormLabel htmlFor="password" className="text-sm">
                                    {t["password"]}
                                </FormLabel>
                                <div className="relative">
                                    <FormControl>
                                        <Input
                                            id="password"
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="********"
                                            onInvalid={(e) => e.preventDefault()}
                                            {...field}
                                        />
                                    </FormControl>

                                    <Button icon={Eye} />
                                    {/* <Button
                                        variant="ghost"
                                        type="button"
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-1 top-2 grid place-items-center p-0 h-6 w-6 min-w-0 cursor-pointer text-muted-foreground"
                                    >
                                        {showPassword ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
                                    </Button> */}
                                </div>
                                <FormMessage />

                                <Button label={t["forgot-password"]} />

                                {/* <Button
                                    variant="ghost"
                                    type="button"
                                    onClick={() => { }}
                                    className="ml-auto p-0 text-sm -mt-2 leading-5 font-normal text-muted-foreground hover:text-muted-foreground/80"
                                >
                                    {t["forgot-password"]}
                                </Button> */}
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </FlexCol>
    );
};

export default LoginForm;

