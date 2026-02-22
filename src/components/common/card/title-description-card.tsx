import type React from "react";

import Card from "@/components/common/core/card/card";
import CardIcon from "@/components/common/core/card/card-icon";
import CardTitle from "@/components/common/core/card/card-title";
import CardDescription from "@/components/common/core/card/card-description";

interface TitleDescriptionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TitleDescriptionCard: React.FC<TitleDescriptionCardProps> = ({
  icon,
  title,
  description,
}: TitleDescriptionCardProps) => {
  return (
    <Card>
      <div className="flex gap-4">
        <CardIcon icon={icon} />
        <div>
          <CardTitle title={title} />
          <CardDescription description={description} />
        </div>
      </div>
    </Card>
  );
};

export default TitleDescriptionCard;
