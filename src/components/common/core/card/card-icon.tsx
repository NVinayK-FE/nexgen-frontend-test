import type React from "react";

interface CardIconProps {
  icon: any;
}

const CardIcon: React.FC<CardIconProps> = ({ icon }: CardIconProps) => {
  return (
    <div className="w-[34px] h-[34px] shrink-0 rounded-full bg-[#3B82F6]/20 border border-[#3B82F6]/30 flex items-center justify-center">
      {icon}
    </div>
  );
};

export default CardIcon;
