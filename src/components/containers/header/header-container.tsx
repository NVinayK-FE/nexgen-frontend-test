import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import styles from "@containers/header/header-container.module.css";

const HeaderContainer: React.FC = () => {
    return (
        <header className={cn("theme-header", styles.header)}>
            <div className="flex items-center gap-3">
                <Image
                    src="/logow.webp"
                    alt="NexGen Guest"
                    width={100}
                    height={19}
                    priority
                />
            </div>
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                {/* <Img src="https://i.pravatar.cc/150?img=12" alt="Admin" className="w-10 h-10 rounded-full" /> */}
                <div className="flex flex-col">
                    <span className="text-slate-100 text-sm font-semibold">Caleb Griffin</span>
                    <span className="text-slate-400 text-xs text-left">Admin Access</span>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
        </header>
    );
}

export default HeaderContainer;
