interface ISubNavTitleProps {
    title: string;
}

const SubNavTitle: React.FC<ISubNavTitleProps> = ({ title }: ISubNavTitleProps) => {
    return (
        <p className="text-(--container-sub-nav-fg-hover) text-base text-2xs font-bold mb-4 tracking-wide text-left pl-1">{title}</p>
    );
}

export default SubNavTitle;
