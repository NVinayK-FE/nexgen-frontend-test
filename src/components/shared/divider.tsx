import { cn } from "@/lib/cn";

interface IDividerProps {
    className?: string;
}

const Divider: React.FC<IDividerProps> = ({ className }: IDividerProps) => {
    return (
        <div className={cn("theme-layer-divider my-1", className)} />
    );
}

export default Divider;
