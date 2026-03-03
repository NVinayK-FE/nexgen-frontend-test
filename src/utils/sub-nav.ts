import { ROUTES } from "@/data/route";
import { LucideIcon, Mail, Lock, Users, Shield, UserPlus, Palette } from "lucide-react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export interface ISubNavItem {
    label: string;
    active: boolean;
    icon: LucideIcon;
    action?: () => void;
    goToPage: (router: AppRouterInstance) => void;
}

export const getAccountSettingSubNavItems = (pathname: string): ISubNavItem[] => [
    {
        label: "Change Password",
        active: pathname === ROUTES.CHANGE_PASSWORD,
        icon: Lock,
        goToPage: (router: AppRouterInstance) => router.push(ROUTES.CHANGE_PASSWORD),
    },
    {
        label: "Change Email",
        active: pathname === ROUTES.CHANGE_EMAIL,
        icon: Mail,
        goToPage: (router: AppRouterInstance) => router.push(ROUTES.CHANGE_EMAIL),
    },
    {
        label: "Theme Settings",
        active: pathname === ROUTES.THEME_SETTINGS,
        icon: Palette,
        goToPage: (router: AppRouterInstance) => router.push(ROUTES.THEME_SETTINGS),
    }
]


export const getUserManagementSubNavItems = (pathname: string): ISubNavItem[] => [
    {
        label: "User List",
        active: pathname === ROUTES.USERS_LIST,
        icon: Users,
        goToPage: (router: AppRouterInstance) => router.push(ROUTES.USERS_LIST),
    },
    {
        label: "Roles & Permissions",
        active: pathname === ROUTES.USERS_ROLES,
        icon: Shield,
        goToPage: (router: AppRouterInstance) => router.push(ROUTES.USERS_ROLES),
    }
]

export const getInviteUserSubNavItems = (pathname: string): ISubNavItem[] => [
    {
        label: "Invite User",
        active: pathname === ROUTES.INVITE_USER,
        icon: UserPlus,
        goToPage: (router: AppRouterInstance) => router.push(ROUTES.INVITE_USER),
    }
]
