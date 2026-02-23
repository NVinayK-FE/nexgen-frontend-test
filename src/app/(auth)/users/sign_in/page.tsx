"use client";

import HeaderFooterCard from '@/components/common/card/header-footer-card';
import LoginForm from '@/components/others/auth/login/login-form';

const LoginPage: React.FC = () => {
    const onSubmit = (email: string, password: string) => {
        console.log(email, password);
    }

    return (
        <div className="theme-page min-h-screen w-full flex items-center justify-center">
            <HeaderFooterCard>
                <LoginForm onSubmit={onSubmit} />
            </HeaderFooterCard>
        </div>
    )
};

export default LoginPage;
