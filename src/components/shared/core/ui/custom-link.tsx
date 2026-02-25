import Link from "next/link"

interface ICustomLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const CustomLink = ({
    href,
    children,
    className,
}: ICustomLinkProps) => {
    return (
        <Link
            href={href}
            className={className}
        >
            {children}
        </Link>
    )
}

export default CustomLink;
