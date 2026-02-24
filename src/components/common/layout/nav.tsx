
import { Home, MessageSquare, Users, Settings } from "lucide-react";

const Nav = () => {
    return (
        <nav className="flex flex-col gap-2 flex-1 w-24 min-h-screen flex flex-col items-center py-6 gap-4 bg-[#0F172A] border-r border-slate-800/10 z-20">
            <a href="#" className="flex items-center justify-center p-4 transition-all rounded-lg hover:bg-blue-600/10 group">
                <Home className="w-6 h-6 text-slate-500 group-hover:text-blue-500 transition-colors" />
            </a>
            <a href="#" className="flex items-center justify-center p-4 transition-all rounded-lg hover:bg-blue-600/10 group">
                <MessageSquare className="w-6 h-6 text-slate-500 group-hover:text-blue-500 transition-colors" />
            </a>
            <a href="#" className="flex items-center justify-center p-4 transition-all rounded-lg hover:bg-blue-600/10 group">
                <Users className="w-6 h-6 text-slate-500 group-hover:text-blue-500 transition-colors" />
            </a>
            <a href="#" className="flex items-center justify-center p-4 transition-all rounded-lg bg-blue-600">
                <Settings className="w-6 h-6 text-white" />
            </a>
        </nav>
    );
}

export default Nav;
