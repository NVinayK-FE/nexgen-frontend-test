import { cn } from "@/lib/cn";

interface ICardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<ICardProps> = ({
  children,
  className,
}: ICardProps) => {
  return (
    <div className={cn("t-card", className)}>
      {children}
    </div>
  );
};

export default Card;
