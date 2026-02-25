import { Role, ROLES } from "@/constants/auth";
import { ROUTES } from "@/constants/route"
import { Home, MessageSquare, Users, Settings, LucideIcon } from "lucide-react";

export interface INavItem {
    label: string;
    href: string;
    icon: LucideIcon;
    active: boolean;
}

const getDashboardNavItem = (pathname: string): INavItem => ({
    label: "Dashboard",
    href: ROUTES.DASHBOARD,
    icon: Home,
    active: pathname === ROUTES.DASHBOARD,
});

const getConversationNavItem = (pathname: string): INavItem => ({
    label: "Conversation",
    href: ROUTES.CONVERSATION,
    icon: MessageSquare,
    active: pathname === ROUTES.CONVERSATION,
});

const getUsersNavItem = (pathname: string): INavItem => ({
    label: "Users",
    href: ROUTES.USERS_LIST,
    icon: Users,
    active: pathname.includes('/users/'),
});

const getSettingsNavItem = (pathname: string): INavItem => ({
    label: "Settings",
    href: ROUTES.CHANGE_PASSWORD,
    icon: Settings,
    active: pathname.includes('/account/settings'),
});

export const getNavItems = (pathname: string, role: Role): INavItem[] => {
    switch (role) {
        case ROLES.MASTER_ADMIN:
            return [
                getDashboardNavItem(pathname),
                getConversationNavItem(pathname),
                getUsersNavItem(pathname),
                getSettingsNavItem(pathname),
            ];
        case ROLES.SUPER_ADMIN:
            return [
                getDashboardNavItem(pathname),
                getConversationNavItem(pathname),
                getUsersNavItem(pathname),
                getSettingsNavItem(pathname),
            ];
        case ROLES.ADMIN:
            return [
                getDashboardNavItem(pathname),
                getConversationNavItem(pathname),
                getSettingsNavItem(pathname),
            ];
        case ROLES.USER:
            return [
                getDashboardNavItem(pathname),
                getConversationNavItem(pathname),
                getSettingsNavItem(pathname),
            ];
        case ROLES.GUEST:
            return [
                getConversationNavItem(pathname),
            ];
        default:
            return [];
    }
};
