import { cn } from "@/lib/cn";

interface IFlexGrowProps {
    children: React.ReactNode;
    className?: string;
}

const FlexGrow: React.FC<IFlexGrowProps> = ({ children, className }: IFlexGrowProps) => {
    return (
        <div className={cn("flex-1", className)}>
            {children}
        </div>
    );
}

export default FlexGrow;
