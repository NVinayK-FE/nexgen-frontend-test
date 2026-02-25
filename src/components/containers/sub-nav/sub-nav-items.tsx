import { cn } from "@/lib/cn";
import { ISubNavItem } from "@/utils/sub-nav";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface ISubNavItemsProps {
    subNavItems: ISubNavItem[];
    pathname: string;
    router: AppRouterInstance;
}

const SubNavItems: React.FC<ISubNavItemsProps> = ({ subNavItems, pathname, router }: ISubNavItemsProps) => {
    return (
        <div className="flex flex-col">
            {subNavItems.map((item) => (
                <div key={item.label} onClick={() => item.goToPage(router)}
                    className={cn('flex items-center justify-start w-full gap-2 text-sm p-3 mb-1 rounded-xl cursor-pointer transition-all border relative group',
                        item.active ? 'text-blue-500 bg-blue-600/12 border-blue-600/40 shadow-[0_2px_8px_rgba(59,130,246,0.15)]'
                            : 'bg-transparent border-transparent hover:text-slate-50 hover:bg-blue-600/8 hover:border-blue-600/20')}>
                    <item.icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                    <div className={cn('absolute right-3 w-1.5 h-1.5 rounded-full transition-colors',
                        item.active ? 'bg-blue-500' : 'group-hover:bg-blue-600/40')} />
                </div>
            ))}
        </div>
    );
}

export default SubNavItems;
