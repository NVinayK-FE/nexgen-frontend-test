"use client";

import { cn } from "@/lib/cn";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CustomLink from "@core/ui/custom-link";
import { getNavItems, INavItem } from "@/utils/nav/nav-util";
import styles from "@containers/nav/nav-container.module.css";

const NavContainer = () => {
    const pathname = usePathname();
    const [navItems, setNavItems] = useState<INavItem[]>(getNavItems(pathname));

    useEffect(() => {
        setNavItems(getNavItems(pathname));
    }, [pathname]);

    return (
        <nav className={cn(styles.nav, "theme-nav")}>
            {navItems.map((item) => (
                <CustomLink key={item.label} href={item.href} className={cn(
                    styles.navLink,
                    item.active && "theme-nav-item-active",
                    !item.active && "hover:theme-nav-item-hover")}>
                    <item.icon className={styles.navLinkItem} />
                </CustomLink>
            ))}
        </nav>
    );
}

export default NavContainer;
