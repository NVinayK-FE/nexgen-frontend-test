"use client";

import NavContainer from '@containers/nav/nav-container';
import ProtectedRoute from '@common/auth/protected-route';
import HeaderContainer from '@containers/header/header-container';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
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
    )
}

export default Layout;
