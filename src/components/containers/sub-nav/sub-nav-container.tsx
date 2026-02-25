import { cn } from "@/lib/cn";
interface ISubNavContainerProps {
    children?: React.ReactNode;
    className?: string;
}

const SubNavContainer: React.FC<ISubNavContainerProps> = ({ children, className }) => {
    return (
        <div className={cn("t-container-sub-nav w-68 flex flex-col px-4 py-6 h-full", className)}>
            {children}
        </div>
    );
}

export default SubNavContainer;
