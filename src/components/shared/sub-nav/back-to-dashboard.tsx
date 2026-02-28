import { ROUTES } from "@/data/route";
import { ChevronLeft } from "lucide-react";
import CustomLink from "@core/ui/custom-link";

const BackToDashboard = () => {
    return (
        <CustomLink href={ROUTES.DASHBOARD}
            className="flex flex-row text-13 gap-2 pb-7 hover:text-(--container-sub-nav-fg-hover)">
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
        </CustomLink>
    );
}

export default BackToDashboard;
