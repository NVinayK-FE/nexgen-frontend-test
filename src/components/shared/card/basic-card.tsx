import type React from "react";

import Card from "@core/card/card";
import CardIcon from "@core/card/card-icon";
import CardTitle from "@core/card/card-title";
import CardDescription from "@core/card/card-description";

interface IBasicCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/**
 * The BasicCard component is a simple card that displays an icon, a title, and a description.
 * It is used for displaying basic information in a card format.
 */
const BasicCard: React.FC<IBasicCardProps> = ({
  icon,
  title,
  description,
}: IBasicCardProps) => {
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

export default BasicCard;
