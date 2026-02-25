import { ArrowRight } from "lucide-react";

interface LogoutProps {
    onClickHandler: () => void;
}

const Logout: React.FC<LogoutProps> = ({ onClickHandler }: LogoutProps) => {
    return (
        <div className="flex flex-col">
            <h1 className="text-[1.375rem] font-bold text-[#F1F5F9] mb-2.5 text-center animate-[fadeUp_0.5s_0.15s_ease_both]">
                You have been logged out
            </h1>
            <p className="text-[0.9375rem] text-[#64748B] text-center leading-relaxed animate-[fadeUp_0.5s_0.2s_ease_both]">
                Thank you for using NEXGEN GUEST.<br />
                Your session has safely ended.
            </p>
            <div className="px-10 py-8 border-b border-[#1E2D42] animate-[fadeUp_0.5s_0.25s_ease_both]">
                <button
                    onClick={onClickHandler}
                    className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold py-3.5 px-6 rounded-[0.625rem] flex items-center justify-center gap-2.5 transition-all duration-200 hover:shadow-lg hover:shadow-[#3B82F6]/35 hover:-translate-y-0.5 active:translate-y-0"
                >
                    Return to Login
                    <ArrowRight size={18} />
                </button>
            </div>
        </div>
    );
}

export default Logout;
