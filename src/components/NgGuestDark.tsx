import React from "react";

export const NgGuestDark: React.FC = () => (
    <div className="bg-gray-900 text-gray-100 min-h-screen h-screen overflow-hidden flex flex-col font-sans">
        {/* Top Navbar */}
        <header className="h-[70px] flex-shrink-0 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-6 z-50 shadow-sm relative">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group">
                <div className="custom-logo" />
            </div>
            {/* Actions & User */}
            <div className="flex items-center gap-4">
                <button className="hidden md:flex px-4 py-2 bg-blue-600 text-white rounded-md font-semibold text-sm shadow-lg hover:brightness-110 transition-all items-center gap-2 transform hover:-translate-y-0.5">
                    {/* Lucide icon placeholder */}
                    <span className="inline-block w-4 h-4 bg-blue-400 rounded-full mr-2" /> Hotel Chat
                </button>
                <div className="h-6 w-px bg-gray-700 mx-2" />
                {/* Notifications */}
                <div className="relative">
                    <button className="relative w-10 h-10 rounded-full hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-blue-500 transition-colors">
                        <span className="inline-block w-5 h-5 bg-gray-500 rounded-full" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                    </button>
                    {/* Notification Dropdown */}
                    <div className="absolute right-0 top-full mt-2 w-80 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl z-[60] overflow-hidden">
                        <div className="p-4 border-b border-gray-700 flex justify-between items-center bg-gray-900">
                            <span className="font-bold text-gray-100 text-sm">Notifications</span>
                            <span className="text-xs text-blue-500 cursor-pointer hover:underline">Mark all read</span>
                        </div>
                        <div className="max-h-[320px] overflow-y-auto">
                            {/* Example notification */}
                            <div className="p-4 border-b border-gray-700 hover:bg-gray-700 cursor-pointer flex gap-3 transition-colors">
                                <div className="w-8 h-8 rounded-full bg-blue-900 text-blue-400 flex items-center justify-center flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-sm text-gray-100 font-medium leading-tight">New message from Room 304</p>
                                    <p className="text-xs text-gray-400 mt-1">"Can you bring a water bottle?"</p>
                                    <p className="text-[10px] text-gray-400 mt-2 font-bold">2 min ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 bg-gray-900 text-center border-t border-gray-700">
                            <button className="text-xs font-bold text-gray-100 hover:text-blue-500 transition-colors">View All Activity</button>
                        </div>
                    </div>
                </div>
                {/* User Dropdown */}
                <div className="relative">
                    <button className="flex items-center gap-3 hover:bg-gray-700 p-1.5 pr-3 rounded-full border border-transparent hover:border-gray-700 transition-all">
                        <img src="https://i.pravatar.cc/150?img=68" className="w-9 h-9 rounded-full object-cover border border-gray-700" alt="Profile" />
                        <div className="text-left hidden sm:block">
                            <div className="text-xs font-bold text-gray-100">Caleb Griffin</div>
                            <div className="text-[10px] text-gray-400">Admin Access</div>
                        </div>
                        <span className="inline-block w-4 h-4 bg-gray-500 rounded-full" />
                    </button>
                    {/* User Dropdown Menu */}
                    <div className="absolute right-0 top-full mt-2 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl p-2 z-[60]">
                        <div className="p-2 border-b border-gray-700 mb-1">
                            <p className="text-xs font-bold text-gray-400 uppercase mb-2">Select Hotel</p>
                            <div className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md cursor-pointer bg-blue-900 text-blue-400 transition-colors">
                                <span className="inline-block w-4 h-4 bg-blue-400 rounded-full" /> <span className="text-sm font-medium">Souma Hotel Lima</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md cursor-pointer text-gray-100 transition-colors">
                                <div className="w-3.5"></div> <span className="text-sm font-medium">Souma Resort Cusco</span>
                            </div>
                        </div>
                        <button className="w-full text-left flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md text-sm text-gray-100 transition-colors">
                            <span className="inline-block w-4 h-4 bg-gray-500 rounded-full" /> My Guides
                        </button>
                        <button className="w-full text-left flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md text-sm text-gray-100 transition-colors">
                            <span className="inline-block w-4 h-4 bg-blue-500 rounded-full" /> UI Settings
                        </button>
                        <button className="w-full text-left flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md text-sm text-gray-100 transition-colors">
                            <span className="inline-block w-4 h-4 bg-gray-500 rounded-full" /> Password Reset
                        </button>
                        <div className="h-px bg-gray-700 my-1"></div>
                        <button className="w-full text-left flex items-center gap-2 p-2 hover:bg-red-50 text-red-600 rounded-md text-sm font-medium transition-colors">
                            <span className="inline-block w-4 h-4 bg-red-500 rounded-full" /> Logout
                        </button>
                    </div>
                </div>
            </div>
        </header>
        {/* Main Layout */}
        <div className="flex flex-1 overflow-hidden relative h-[calc(100vh-70px)]">
            {/* Left Navigation Rail */}
            <nav className="w-[80px] h-full bg-gray-800 border-r border-gray-700 flex flex-col items-center py-6 z-40 glass flex-shrink-0">
                <div className="flex-1 flex flex-col w-full items-center gap-4">
                    {/* Nav Items injected via JS in original, add here as needed */}
                </div>
                <div className="mt-auto mb-4">
                    <button className="w-12 h-12 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-gray-100 transition-all duration-300 group relative">
                        <span className="inline-block w-6 h-6 bg-blue-500 rounded-full" />
                        <span className="absolute left-14 bg-gray-900 text-white text-xs font-semibold px-2 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none translate-x-2 group-hover:translate-x-0 transition-transform">
                            UI Customizer
                        </span>
                    </button>
                </div>
            </nav>
            {/* Main Content Area */}
            <main className="flex-1 relative h-full overflow-hidden bg-gray-900">
                {/* View Content injected via JS in original, add here as needed */}
            </main>
        </div>
    </div>
);

export default NgGuestDark;
