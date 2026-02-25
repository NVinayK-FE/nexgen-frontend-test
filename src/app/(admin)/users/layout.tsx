"use client";

import { ChevronLeft } from "lucide-react";
import { ROUTES } from "@/utils/auth/routes/routes";
import { useRouter, usePathname } from "next/navigation";
import CustomLink from "@/components/common/core/ui/custom-link";
import SubNavItems from "@/components/containers/sub-nav/sub-nav-items";
import { getUserManagementSubNavItems } from "@/utils/nav/sub-nav-util";
import SubNavContainer from "@/components/containers/sub-nav/sub-nav-container";

const UsersLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

                    <h1 className="text-slate-100 text-base text-2xs font-bold mb-4 tracking-wide text-left">USER MANAGEMENT</h1>

                    <SubNavItems subNavItems={getUserManagementSubNavItems(pathname)} pathname={pathname} router={router} />
                </div>
            </SubNavContainer>
            <div className="flex-1 p-10">
                {children}
            </div>
        </div>
    );
}

export default UsersLayout;
