import { cn } from "@/lib/cn";
import { ISubNavItem } from "@/utils/sub-nav";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface ISubNavItemsProps {
    subNavItems: ISubNavItem[];
    router: AppRouterInstance;
}

const SubNavItems: React.FC<ISubNavItemsProps> = ({ subNavItems, router }: ISubNavItemsProps) => {
    return (
        <div className="flex flex-col">
            {subNavItems.map((item) => (
                <div key={item.label} onClick={() => item.goToPage(router)}
                    className={cn('flex items-center justify-start w-full gap-2 text-sm p-3 mb-1 rounded-xl cursor-pointer transition-all border border-transparent relative group',
                        item.active && 'theme-layer-secondary-active-border',
                        !item.active && 'hover:theme-layer-secondary-hover')}>
                    <item.icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                    <div className={cn('absolute right-3 w-1.5 h-1.5 rounded-full transition-colors',
                        item.active ? 'theme-layer-primary-active-border' : 'group-hover:theme-layer-secondary-active-border')} />
                </div>
            ))}
        </div>
    );
}

export default SubNavItems;
