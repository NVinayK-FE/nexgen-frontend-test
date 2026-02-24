"use client";

import BasicPage from '@core/page/basic-page';
import BrandCard from '@common/card/brand-card';
import { useTranslations } from '@/hooks/useTranslations';
import Logout from '@/components/others/auth/logout/logout';

const LogoutPage: React.FC = () => {
    const { t } = useTranslations("header");

    const goToLoginPage = () => {
        console.log("Navigating to login page");
    }

    return (
        <BasicPage>
            <BrandCard imageTitle={t["logo"]}>
                <Logout onClickHandler={goToLoginPage} />
            </BrandCard>
        </BasicPage>
    )
};

export default LogoutPage;
