
import HeaderContainer from '@/components/containers/header/header-container';
import NavContainer from '@/components/containers/nav/nav-container';
import ProtectedRoute from '@/components/others/auth/protected-route';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    <ProtectedRoute>
        <div className="min-h-screen flex flex-col">
            <HeaderContainer />

            <div className="flex flex-row flex-1">
                <div>
                    <NavContainer />
                </div>

                <main className="flex-1 theme-content">
                    {children}
                </main>
            </div>
        </div>
    </ProtectedRoute>

export default Layout;
