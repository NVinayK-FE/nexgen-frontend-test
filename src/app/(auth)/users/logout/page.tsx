"use client";

import Logout from '@common/auth/logout/logout';
import BrandCard from '@shared/card/brand-card';
import BasicPage from '@shared/core/page/basic-page';
import { useTranslation } from '@/hooks/translation';
import { useRouter } from 'next/navigation';
import { goToSignIn } from '@/utils/route';

const LogoutPage: React.FC = () => {
    const router = useRouter();
    const { t } = useTranslation("header");

    const clickHandle = () => {
        goToSignIn(router);
    }

    return (
        <BasicPage>
            <BrandCard imageTitle={t["logo"]}>
                <Logout onClickHandler={clickHandle} />
            </BrandCard>
        </BasicPage>
    )
};

export default LogoutPage;
