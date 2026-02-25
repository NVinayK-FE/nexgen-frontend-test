import { cn } from "@/lib/cn";

interface IFlexRowProps {
    children: React.ReactNode;
    className?: string;
}

const FlexRow: React.FC<IFlexRowProps> = ({ children, className }: IFlexRowProps) => {
    return (
        <div className={cn("flex flex-row", className)}>
            {children}
        </div>
    );
}

export default FlexRow;
