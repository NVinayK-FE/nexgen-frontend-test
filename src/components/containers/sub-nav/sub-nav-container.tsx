interface ISubNavContainerProps {
    children?: React.ReactNode;
}

const SubNavContainer: React.FC<ISubNavContainerProps> = ({ children }) => {
    return (
        <div className="theme-nav w-68 min-h-screen px-4 py-6">
            {children}
        </div>
    );
}

export default SubNavContainer;
