"use client";

import { cn } from "@/lib/cn";
import { getNavItems } from "@/utils/nav";
import { useEffect, useState } from "react";
import CustomLink from "@core/ui/custom-link";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/stores/auth-store";
import styles from "@container/nav/nav-container.module.css";

const NavContainer = () => {
    const { role } = useAuthStore();
    const pathname = usePathname();
    const [navItems, setNavItems] = useState(getNavItems(pathname, role));

    useEffect(() => {
        setNavItems(getNavItems(pathname, role));
    }, [pathname, role]);

    return (
        <nav className={styles.nav}>
            {navItems.map((item) => (
                <CustomLink href={item.href} className={cn(
                    styles.navLink, "group",
                    item.active && styles.navLinkActive,
                    !item.active && "hover:bg-blue-600/10")}>
                    <item.icon className={cn(
                        styles.navLinkItem,
                        item.active && styles.navLinkActive,
                        !item.active && "text-slate-500 group-hover:text-blue-500")}
                    />
                </CustomLink>
            ))}
        </nav>
    );
}

export default NavContainer;
