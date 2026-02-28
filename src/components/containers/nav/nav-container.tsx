"use client";

import { cn } from "@/lib/cn";
import { useEffect, useState } from "react";
import CustomLink from "@core/ui/custom-link";
import { usePathname } from "next/navigation";
import { useUserStore } from "@/stores/user-store";
import { getNavItems, INavItem } from "@/utils/nav";
import styles from "@containers/nav/nav-container.module.css";

const NavContainer: React.FC = () => {
    const { role } = useUserStore().user;
    const pathname = usePathname();
    const [navItems, setNavItems] = useState<INavItem[]>(getNavItems(pathname, role));

    useEffect(() => {
        setNavItems(getNavItems(pathname, role));
    }, [pathname, role]);

    return (
        <nav className={cn(styles.nav, "t-container-nav")}>
            {navItems.map((item) => (
                <CustomLink key={item.label} href={item.href} className={cn(
                    styles.navLink,
                    item.active && "t-container-nav-active",
                    !item.active && "hover:t-container-nav-hover")}>
                    <item.icon className={styles.navLinkItem} />
                </CustomLink>
            ))}
        </nav>
    );
}

export default NavContainer;
