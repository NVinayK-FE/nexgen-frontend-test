interface IBasicPageProps {
    children?: React.ReactNode;
}

const BasicPage: React.FC<IBasicPageProps> = ({ children }: IBasicPageProps) => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center">
            {children}
        </div>
    );
}

export default BasicPage;
