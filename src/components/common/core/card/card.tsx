interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  children,
}: CardProps) => {
  return (
    <div className="p-5 bg-[#162032] border border-[#1E2D42] rounded-2xl">
      {children}
    </div>
  );
};

export default Card;
