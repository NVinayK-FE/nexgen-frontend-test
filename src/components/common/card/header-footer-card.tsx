
import Image from "next/image";
import { Copyright } from "lucide-react";

interface HeaderFooterCardProps {
    children?: React.ReactNode;
}

const HeaderFooterCard: React.FC<HeaderFooterCardProps> = ({ children }) => {
    return (
        <div className="relative w-full max-w-lg my-auto animate-fadeInUp">
            <div className="relative bg-[#202A38] text-[#A7A8A9] pt-12 pb-6 px-4 sm:px-8 md:px-12 rounded-3xl">
                <div className="relative z-10 text-center mb-8 animate-[fadeInDown_0.8s_ease-out]">
                    {/* <Image
                        className="dark:invert"
                        src="/logo.webp"
                        alt="NexGen Guest logo"
                        width={100}
                        height={20}
                        priority
                    /> */}
                    <p className="text-slate-400 text-sm font-light tracking-wide">
                        Sign in to your account
                    </p>
                </div>

                {children && (
                    <div className="relative z-10 text-center mt-12">
                        {children}
                    </div>
                )}

                <div className="relative z-10 text-center mt-12">
                    <p className="text-slate-500 text-xs">
                        2026 ALL RIGHTS RESERVED<br />
                        <span className="inline-flex items-center gap-1 mt-1">
                            <Copyright className="w-3 h-3" />
                            NexGen Guest Inc.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeaderFooterCard;
