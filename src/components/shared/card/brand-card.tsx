import Image from "next/image";
import Card from "@core/card/card";
import { Copyright } from "lucide-react";
import { cn } from "@/lib/cn";

interface IBrandCardProps {
    imageTitle?: string;
    children?: React.ReactNode;
    className?: string;
}

/**
 * BrandCard component is used to display a brand logo along with copyright information. 
 * It can also accept children components to display additional content between the logo and the copyright information.
 */
const BrandCard: React.FC<IBrandCardProps> = ({
    imageTitle = "",
    children,
    className
}: IBrandCardProps) => {
    return (
        <Card className={cn("max-w-xl flex flex-col items-center p-9 rounded-2xl", className)}>
            <Image
                src="/logow.webp"
                alt={imageTitle}
                width={100}
                height={20}
                priority
            />

            {children && (
                <div>
                    {children}
                </div>
            )}

            <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-xs">
                    2026 ALL RIGHTS RESERVED<br />
                </span>
                <span className="text-2xs flex flex-row items-center gap-1">
                    <Copyright className="w-3 h-3" />
                    NexGen Guest Inc.
                </span>
            </div>
        </Card>
    );
};

export default BrandCard;
