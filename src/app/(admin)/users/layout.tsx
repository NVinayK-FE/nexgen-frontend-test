"use client";

import FlexRow from "@core/flex/flex-row";
import { useEffect, useState } from "react";
import FlexGrow from "@core/flex/flex-grow";
import SubNavTitle from "@shared/sub-nav/sub-nav-title";
import { useRouter, usePathname } from "next/navigation";
import SubNavItems from "@containers/sub-nav/sub-nav-items";
import BackToDashboard from "@shared/sub-nav/back-to-dashboard";
import SubNavContainer from "@containers/sub-nav/sub-nav-container";
import { getInviteUserSubNavItems, getUserManagementSubNavItems, ISubNavItem } from "@/utils/sub-nav";
import Divider from "@shared/divider";

const UsersLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter();
    const pathname = usePathname();
    const [subNavItems, setSubNavItems] = useState<ISubNavItem[]>(
        getUserManagementSubNavItems(pathname)
    );
    const [subNavItems2, setSubNavItems2] = useState<ISubNavItem[]>(
        getInviteUserSubNavItems(pathname)
    );

    useEffect(() => {
        setSubNavItems(getUserManagementSubNavItems(pathname));
        setSubNavItems2(getInviteUserSubNavItems(pathname));
    }, [pathname]);

    return (
        <FlexRow className="h-full">
            <SubNavContainer>
                <BackToDashboard />
                <SubNavTitle title="USER MANAGEMENT" />
                <SubNavItems subNavItems={subNavItems} router={router} />
                <Divider />
                <SubNavItems subNavItems={subNavItems2} router={router} />
            </SubNavContainer>
            <FlexGrow className="t-max-h-screen-header p-9 overflow-y-auto">
                {children}
            </FlexGrow>
        </FlexRow>
    );
}

export default UsersLayout;
