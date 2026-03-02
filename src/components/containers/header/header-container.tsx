import { BookOpen, CheckIcon, ChevronDown, Icon, Lock, LogOut, LucideIcon, Settings } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import styles from "@containers/header/header-container.module.css";
import { useEffect, useRef, useState } from "react";
import Divider from "@/components/shared/divider";

interface IDropdownItem {
    icon?: LucideIcon;
    label: string;
    color?: string;
    selected?: boolean;
}

const HeaderContainer: React.FC = () => {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setShowUserMenu(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);


    const DropdownItem = ({ icon: Icon, label, selected }: IDropdownItem) => (
        <button
            className={cn(
                `cursor-pointer w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors
                hover:bg-(--container-sub-nav-bg-hover) hover:text-(--container-sub-nav-fg-hover)`,
                selected && "bg-(--container-sub-nav-bg-active) text-(--container-sub-nav-fg-active)"
            )}
        >
            <span className="w-4 h-4">{Icon && <Icon className="w-4 h-4" />}</span>
            {label}
        </button>
    );

    return (
        <header className={cn("t-header", styles.header)}>
            <div className="flex items-center gap-3">
                <Image
                    src="/logow.webp"
                    alt="NexGen Guest"
                    width={100}
                    height={19}
                    priority
                />
            </div>
            <div ref={dropdownRef} className="relative flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setShowUserMenu(!showUserMenu)}>
                {/* <Img src="https://i.pravatar.cc/150?img=12" alt="Admin" className="w-10 h-10 rounded-full" /> */}
                <div className="flex flex-col">
                    <span className="text-(--container-sub-nav-fg-hover) text-sm font-semibold">Caleb Griffin</span>
                    <span className="text-(--container-fg) text-xs text-left">Admin Access</span>
                </div>
                <ChevronDown className="w-4 h-4 text-(--container-sub-nav-fg-hover)" />

                {showUserMenu && (
                    <div className="absolute t-card rounded-tl-none rounded-tr-none right-0 top-[calc(100%+20px)] w-[234px] shadow-2xl p-1.5 z-[9999]">
                        {/* Hotel switcher */}
                        <div className="px-1.5 pb-2.5 mb-1">
                            <p className="text-[0.625rem] font-bold text-[#475569] uppercase tracking-wider ml-1.5 mb-1.5">
                                Select Hotel
                            </p>
                            <DropdownItem icon={CheckIcon} label="Souma Hotel Lima" selected />
                            <DropdownItem label="Souma Resort Cusco" />
                        </div>
                        <Divider />
                        <DropdownItem icon={BookOpen} label="My Guides" />
                        <DropdownItem icon={Settings} label="UI Settings" />
                        <DropdownItem icon={Lock} label="Password Reset" />
                        <Divider />
                        <DropdownItem icon={LogOut} label="Logout" color="#EF4444" />
                    </div>
                )}
            </div>
        </header>
    );
}

export default HeaderContainer;
