"use client";

import NavContainer from '@containers/nav/nav-container';
import ProtectedRoute from '@common/auth/protected-route';
import HeaderContainer from '@containers/header/header-container';
import FlexCol from '@/components/shared/core/flex/flex-col';
import FlexRow from '@/components/shared/core/flex/flex-row';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ProtectedRoute>
            <FlexCol className='min-h-screen'>
                <HeaderContainer />
                <FlexRow className="flex-1">
                    <NavContainer />
                    <main className="flex-1">
                        {children}
                    </main>
                </FlexRow>
            </FlexCol>
        </ProtectedRoute>
    )
}

export default Layout;
