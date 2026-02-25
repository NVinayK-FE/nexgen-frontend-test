interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  children,
}: CardProps) => {
  return (
    <div className="theme-card">
      {children}
    </div>
  );
};

export default Card;
