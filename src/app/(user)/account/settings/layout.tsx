"use client";

import { ROUTES } from "@/constants/route";
import { ChevronLeft } from "lucide-react";
import CustomLink from "@core/ui/custom-link";
import { useRouter, usePathname } from "next/navigation";
import SubNavItems from "@containers/sub-nav/sub-nav-items";
import { getAccountSettingSubNavItems } from "@/utils/sub-nav";
import SubNavContainer from "@containers/sub-nav/sub-nav-container";

const AccountSettingsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div className="flex flex-row">
            <SubNavContainer>
                <div className="flex flex-col">
                    <CustomLink href={ROUTES.DASHBOARD}
                        className="flex flex-row text-13 gap-2 pb-7 hover:theme-sub-nav-item-hover">
                        <ChevronLeft className="w-5 h-5" />
                        <span>Back to Dashboard</span>
                    </CustomLink>

                    <h1 className="text-slate-100 text-base text-2xs font-bold mb-4 tracking-wide text-left">ACCOUNT SETTINGS</h1>

                    <SubNavItems subNavItems={getAccountSettingSubNavItems(pathname)} pathname={pathname} router={router} />
                </div>
            </SubNavContainer>
            <div className="flex-1 p-10">
                {children}
            </div>
        </div>
    );
}

export default AccountSettingsLayout;
