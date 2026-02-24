'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

import { ROUTES } from '@/utils/routes';
import { useAuthStatus } from '@/hooks/auth/useAuth';

interface IProtectedRouteProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ children, fallback }) => {
    const router = useRouter();
    const pathname = usePathname();
    const { isAuthenticated, isLoading } = useAuthStatus();

    useEffect(() => {
        if (isLoading) {
            return;
        }

        if (!isAuthenticated) {
            const redirectPath = pathname || ROUTES.HOME;
            router.replace(`/login?redirect=${encodeURIComponent(redirectPath)}`);
        }
    }, [isAuthenticated, isLoading, router, pathname]);

    // Loading / unauthenticated state
    if (isLoading || !isAuthenticated) {
        return (
            <div role="status" aria-busy="true">
                {fallback || <div>Loading...</div>}
            </div>
        );
    }

    return <>{children}</>;
};

export default ProtectedRoute;
