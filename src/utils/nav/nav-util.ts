import { ROUTES } from "@/utils/auth/routes/routes"
import { Home, MessageSquare, Users, Settings, LucideIcon } from "lucide-react";

export interface INavItem {
    label: string;
    href: string;
    icon: LucideIcon;
    active: boolean;
}

export const getNavItems = (pathname: string): INavItem[] => [
    {
        label: "Dashboard",
        href: ROUTES.DASHBOARD,
        icon: Home,
        active: pathname === ROUTES.DASHBOARD,
    },
    {
        label: "Conversation",
        href: ROUTES.CONVERSATION,
        icon: MessageSquare,
        active: pathname === ROUTES.CONVERSATION,
    },
    {
        label: "Users",
        href: ROUTES.USERS_LIST,
        icon: Users,
        active: pathname === ROUTES.USERS_LIST,
    },
    {
        label: "Settings",
        href: ROUTES.CHANGE_PASSWORD,
        icon: Settings,
        active: pathname.includes('/account/settings'),
    }
];
