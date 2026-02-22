interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  children,
}: CardProps) => {
  return (
    <div className="theme-card-bg theme-card-fg p-8 sm:p-4 md:p-6 rounded-2xl">
      {children}
    </div>
  );
};

export default Card;
