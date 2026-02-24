
import Header from '@/components/common/layout/header';
import Nav from '@/components/common/layout/nav';
import ProtectedRoute from '@/components/others/auth/protected-route';
// import { usePathname } from 'next/navigation';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // const pathname = usePathname();
    // console.log(pathname);

    return (
        <ProtectedRoute>
            <div className="min-h-screen flex flex-col">
                <Header />

                <div className="flex flex-row flex-1">
                    <div>
                        <Nav />
                    </div>

                    <main className="flex-1 bg-[#1E293B]">
                        {children}
                    </main>
                </div>
            </div>
        </ProtectedRoute>
    )
}

export default Layout;
