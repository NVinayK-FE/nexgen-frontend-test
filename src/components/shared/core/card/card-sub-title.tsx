import { cn } from "@/lib/cn";

interface ICardSubTitleProps {
    title: string;
    className?: string;
}

const CardSubTitle: React.FC<ICardSubTitleProps> = ({ title, className }: ICardSubTitleProps) => {
    return (
        <div className={cn("text-xs", className)}>
            {title}
        </div>
    );
};

export default CardSubTitle;
