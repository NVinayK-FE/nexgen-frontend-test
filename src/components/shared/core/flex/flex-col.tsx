import { cn } from "@/lib/cn";

interface IFlexColProps {
    children: React.ReactNode;
    className?: string;
}

const FlexCol: React.FC<IFlexColProps> = ({ children, className }: IFlexColProps) => {
    return (
        <div className={cn("flex flex-col", className)}>
            {children}
        </div>
    );
}

export default FlexCol;
