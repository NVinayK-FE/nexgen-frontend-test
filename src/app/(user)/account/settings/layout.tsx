"use client";

import FlexRow from "@core/flex/flex-row";
import { useEffect, useState } from "react";
import FlexGrow from "@core/flex/flex-grow";
import SubNavTitle from "@shared/sub-nav/sub-nav-title";
import { useRouter, usePathname } from "next/navigation";
import SubNavItems from "@containers/sub-nav/sub-nav-items";
import BackToDashboard from "@shared/sub-nav/back-to-dashboard";
import SubNavContainer from "@containers/sub-nav/sub-nav-container";
import { getAccountSettingSubNavItems, ISubNavItem } from "@/utils/sub-nav";

const AccountSettingsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter();
    const pathname = usePathname();
    const [subNavItems, setSubNavItems] = useState<ISubNavItem[]>(
        getAccountSettingSubNavItems(pathname)
    );

    useEffect(() => {
        setSubNavItems(getAccountSettingSubNavItems(pathname));
    }, [pathname]);

    return (
        <FlexRow>
            <SubNavContainer>
                <BackToDashboard />
                <SubNavTitle title="ACCOUNT SETTINGS" />
                <SubNavItems subNavItems={subNavItems} router={router} />
            </SubNavContainer>
            <FlexGrow className="p-9">
                {children}
            </FlexGrow>
        </FlexRow>
    );
}

export default AccountSettingsLayout;
