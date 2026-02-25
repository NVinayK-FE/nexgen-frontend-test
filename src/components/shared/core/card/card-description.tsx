import type React from "react";

interface CardDescriptionProps {
  description: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ description }: CardDescriptionProps) => {
  return (
    <div className="text-[0.875rem] text-[#64748B] leading-relaxed text-left">
      {description}
    </div>
  );
};

export default CardDescription;
