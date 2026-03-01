interface IContentTitleProps {
    title: string;
    description?: string;
}

const ContentTitle: React.FC<IContentTitleProps> = ({ title, description }: IContentTitleProps) => {
    return (
        <div className="mb-3" >
            <h1 className="text-2xl font-semibold text-(--container-sub-nav-fg-hover) mb-1">{title}</h1>
            {description && <p className="text-sm text-(--container-fg)">{description}</p>}
        </div>
    )
};

export default ContentTitle;
