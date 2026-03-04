import Button from "@/components/shared/core/ui/button";
import { ArrowRight } from "lucide-react";

interface LogoutProps {
    onClickHandler: () => void;
}

const Logout: React.FC<LogoutProps> = ({ onClickHandler }: LogoutProps) => {
    return (
        <div className="flex flex-col gap-3 pt-2">
            <h1 className="text-lg font-bold theme-layer-secondary mb-2.5 text-center animate-[fadeUp_0.5s_0.15s_ease_both]">
                You have been logged out
            </h1>
            <p className="text-center leading-relaxed animate-[fadeUp_0.5s_0.2s_ease_both]">
                Thank you for using NEXGEN GUEST.

            </p>
            <p className="text-center leading-relaxed animate-[fadeUp_0.5s_0.25s_ease_both]">
                Your session has safely ended.
            </p>
            <div className="px-10 py-8 animate-[fadeUp_0.5s_0.25s_ease_both]">
                <Button
                    icon={ArrowRight}
                    label="Return to Login"
                    onClick={onClickHandler}
                    buttonVariant="active"
                    className="w-full"
                />
            </div>
        </div>
    );
}

export default Logout;
