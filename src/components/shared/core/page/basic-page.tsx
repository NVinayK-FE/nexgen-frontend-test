import { cn } from "@/lib/cn";

interface IBasicPageProps {
    children?: React.ReactNode;
    className?: string;
}

const BasicPage: React.FC<IBasicPageProps> = ({ children, className }: IBasicPageProps) => {
    return (
        <div className={cn("min-h-screen w-full flex items-center justify-center", className)}>
            {children}
        </div>
    );
}

export default BasicPage;
