"use client";

import Logout from '@common/auth/logout/logout';
import BrandCard from '@shared/card/brand-card';
import BasicPage from '@shared/core/page/basic-page';
import { useTranslation } from '@/hooks/translation';

const LogoutPage: React.FC = () => {
    const { t } = useTranslation("header");

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
