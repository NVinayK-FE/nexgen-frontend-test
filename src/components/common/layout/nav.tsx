"use client";

import { Home, MessageSquare, Users, Settings } from "lucide-react";
import CustomLink from "../core/ui/custom-link";
import { ROUTES } from "@/utils/auth/routes/routes";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import styles from "./nav.module.css";

const Nav = () => {
    const pathname = usePathname()

    return (
        <nav className={styles.nav}>
            <CustomLink href={ROUTES.DASHBOARD} className={cn(
                styles.navLink, "group",
                pathname === ROUTES.DASHBOARD && styles.navLinkActive,
                pathname !== ROUTES.DASHBOARD && "hover:bg-blue-600/10")}>
                <Home className={cn(
                    styles.navLinkItem,
                    pathname === ROUTES.DASHBOARD && styles.navLinkActive,
                    pathname !== ROUTES.DASHBOARD && "text-slate-500 group-hover:text-blue-500")}
                />
            </CustomLink>
            <CustomLink href={ROUTES.MESSAGES} className={cn(
                styles.navLink, "group",
                pathname === ROUTES.MESSAGES && styles.navLinkActive,
                pathname !== ROUTES.MESSAGES && "hover:bg-blue-600/10")}>
                <MessageSquare className={cn(
                    styles.navLinkItem,
                    pathname === ROUTES.MESSAGES && styles.navLinkActive,
                    pathname !== ROUTES.MESSAGES && "text-slate-500 group-hover:text-blue-500")} />
            </CustomLink>
            <CustomLink href={ROUTES.USERS} className={cn(
                styles.navLink, "group",
                pathname === ROUTES.USERS && styles.navLinkActive,
                pathname !== ROUTES.USERS && "hover:bg-blue-600/10")}>
                <Users className={cn(
                    styles.navLinkItem,
                    pathname === ROUTES.USERS && styles.navLinkActive,
                    pathname !== ROUTES.USERS && "text-slate-500 group-hover:text-blue-500")} />
            </CustomLink>
            <CustomLink href={ROUTES.CHANGE_PASSWORD} className={cn(
                styles.navLink, "group",
                pathname.includes('/account/settings') && styles.navLinkActive,
                !pathname.includes('/account/settings') && "hover:bg-blue-600/10")}>
                <Settings className={cn(
                    styles.navLinkItem,
                    pathname.includes('/account/settings') && styles.navLinkActive,
                    !pathname.includes('/account/settings') && "text-slate-500 group-hover:text-blue-500")} />
            </CustomLink>
        </nav>
    );
}

export default Nav;
