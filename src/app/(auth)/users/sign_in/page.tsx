"use client";

import HeaderFooterCard from '@/components/common/card/header-footer-card';
import LoginForm from '@others/auth/login-form';

const LoginPage: React.FC = () => {
    // TODO: Verify session, if exist redirect to dashboard

    // TODO: implement login functionality
    const onSubmit = (email: string, password: string) => {
        console.log(email, password);
    }

    return (

        <div className="min-h-screen w-full flex items-center justify-center p-4 bg-slate-950 fixed inset-0 overflow-y-auto font-['Outfit',-apple-system,BlinkMacSystemFont,sans-serif]">
            <HeaderFooterCard>
                <LoginForm onSubmit={onSubmit} />
            </HeaderFooterCard>

        </div>
    )
};

export default LoginPage;
