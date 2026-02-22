"use client";

import HeaderFooterCard from '@/components/common/card/header-footer-card';
import LoginForm from '@others/auth/login-form';

const LoginPage: React.FC = () => {
    const onSubmit = (email: string, password: string) => {
        console.log(email, password);
    }

    return (
        <div className="min-h-screen w-full theme-page-bg theme-page-fg flex items-center justify-center">
            <HeaderFooterCard>
                <LoginForm onSubmit={onSubmit} />
            </HeaderFooterCard>
        </div>
    )
};

export default LoginPage;
