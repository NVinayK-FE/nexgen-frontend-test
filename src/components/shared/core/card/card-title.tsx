import { cn } from "@/lib/cn";
interface ICardTitleProps {
  title: string;
  className?: string;
}

const CardTitle: React.FC<ICardTitleProps> = ({ title, className }: ICardTitleProps) => {
  return (
    <div className={cn("theme-layer-secondary", className)}>
      {title}
    </div>
  );
};

export default CardTitle;
