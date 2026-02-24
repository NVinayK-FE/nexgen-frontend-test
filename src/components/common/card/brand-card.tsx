import Image from "next/image";
import { Copyright } from "lucide-react";
import Card from "@core/card/card";

interface IBrandCardProps {
    imageTitle?: string;
    children?: React.ReactNode;
}

/**
 * BrandCard component is used to display a brand logo along with copyright information. 
 * It can also accept children components to display additional content between the logo and the copyright information.
 */
const BrandCard: React.FC<IBrandCardProps> = ({
    imageTitle = "",
    children
}: IBrandCardProps) => {
    return (
        <Card>
            <div className="flex flex-col items-center gap-2">
                <Image
                    src="/logow.webp"
                    alt={imageTitle}
                    width={100}
                    height={20}
                    priority
                />
            </div>

            {children && (
                <div className="my-8">
                    {children}
                </div>
            )}

            <div className="flex flex-col items-center gap-4 mt-12">
                <p className="theme-card-footer-fg text-xs">
                    2026 ALL RIGHTS RESERVED<br />
                    <span className="inline-flex items-center gap-1 mt-1">
                        <Copyright className="w-3 h-3" />
                        NexGen Guest Inc.
                    </span>
                </p>
            </div>
        </Card>
    );
};

export default BrandCard;
