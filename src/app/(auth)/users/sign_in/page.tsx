"use client";

import BrandCard from '@shared/card/brand-card';
import BasicPage from '@shared/core/page/basic-page';
import { useTranslation } from '@/hooks/translation';
import LoginForm from '@common/auth/login/login-form';

/**
 * LoginPage component for user authentication.
 */
const LoginPage: React.FC = () => {
    const { t } = useTranslation("header");

    const onSubmit = (email: string, password: string) => {
        console.log(email, password);
    }

    return (
        <BasicPage>
            <BrandCard imageTitle={t["logo"]}>
                <LoginForm onSubmit={onSubmit} />
            </BrandCard>
        </BasicPage>
    )
};

export default LoginPage;
