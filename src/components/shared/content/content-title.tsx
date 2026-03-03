interface IContentTitleProps {
    title: string;
    description?: string;
}

const ContentTitle: React.FC<IContentTitleProps> = ({ title, description }: IContentTitleProps) => {
    return (
        <div className="mb-3" >
            <h1 className="text-2xl font-semibold theme-layer-primary mb-1">{title}</h1>
            {description && <p className="text-sm theme-layer-tertiary">{description}</p>}
        </div>
    )
};

export default ContentTitle;
