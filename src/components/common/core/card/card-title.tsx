import type React from "react";

interface CardTitleProps {
  title: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ title }: CardTitleProps) => {
  return (
    <div className="text-[0.9375rem] font-bold text-[#F1F5F9] mb-1">
      {title}
    </div>
  );
};

export default CardTitle;
