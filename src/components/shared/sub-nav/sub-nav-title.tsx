interface ISubNavTitleProps {
    title: string;
}

const SubNavTitle: React.FC<ISubNavTitleProps> = ({ title }: ISubNavTitleProps) => {
    return (
        <p className="theme-layer-primary text-xs font-bold mb-4 tracking-wide text-left pl-1">{title}</p>
    );
}

export default SubNavTitle;
