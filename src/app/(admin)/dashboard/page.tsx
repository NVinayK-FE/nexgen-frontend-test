"use client";

import Button from "@core/ui/button";
import { Edit3, PauseCircle, SmartphoneIcon } from "lucide-react";

const AdminDashboardPage: React.FC = () => {
    const renderView = (view: string) => {
        // Implement view rendering logic here
        console.log("Render view:", view);
    };

    const generateStatCard = (label: string, val: string, change: string, icon: string, textColor: string, bgColor: string) => {
        return (
            <div className="theme-card bg-input border border-custom rounded-lg p-4 flex flex-col justify-between h-32 hover:border-accent transition-colors">
                <div className="flex justify-between items-start">
                    <div className={`p-2 radius-md ${textColor} ${bgColor.replace('bg-', 'bg-opacity-10 ')}`}>
                        <i data-lucide={icon} className="w-6 h-6"></i>
                    </div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${change.includes('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{change}</span>
                </div>
                <div>
                    <div className="text-2xl font-bold text-main tracking-tight">{val}</div>
                    <div className="text-xs text-sub font-medium">{label}</div>
                </div>
            </div>
        )
    }

    return (
        <div className="t-max-h-screen-header p-9 overflow-y-auto">
            <div className="flex flex-row justify-between m-4">
                <div>
                    <div className="text-xs font-bold text-accent uppercase tracking-wider mb-1">Welcome Back</div>
                    <h1 className="text-3xl font-bold text-main tracking-tight">Souma Hotel Lima</h1>
                </div>
                <div className="flex flex-wrap gap-3">
                    <Button
                        label="Edit Guide Core"
                        onClick={() => renderView('guide')}
                        icon={Edit3}
                        buttonVariant="outline"
                    />
                    <Button
                        label="Digital Compendium"
                        onClick={() => renderView('compendium')}
                        icon={SmartphoneIcon}
                        buttonVariant="outline"
                    />
                    <Button
                        label="Pause Guide"
                        onClick={() => renderView('pause')}
                        icon={PauseCircle}
                        buttonVariant="outline"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <div className="theme-card cursor-pointer group relative overflow-hidden">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-4 relative z-10">
                        <i data-lucide="concierge-bell"></i>
                    </div>
                    <h3 className="font-bold text-main text-lg">Hotel Services</h3>
                    <p className="text-xs text-sub mt-2 leading-relaxed">Manage housekeeping requests, spa bookings, and dining menus.</p>
                </div>
                <div className="theme-card bg-card p-6 radius-lg border border-custom shadow-sm cursor-pointer group relative overflow-hidden">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-4 relative z-10">
                        <i data-lucide="map"></i>
                    </div>
                    <h3 className="font-bold text-main text-lg">Explore Local</h3>
                    <p className="text-xs text-sub mt-2 leading-relaxed">Curate local map pins, tour guides, and recommended spots.</p>
                </div>
                <div className="theme-card bg-card p-6 radius-lg border border-custom shadow-sm cursor-pointer group relative overflow-hidden">
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-4 relative z-10">
                        <i data-lucide="activity"></i>
                    </div>
                    <h3 className="font-bold text-main text-lg">Activity Data</h3>
                    <p className="text-xs text-sub mt-2 leading-relaxed">Analyze guest interaction logs and service usage patterns.</p>
                </div>
                <div className="theme-card bg-card p-6 radius-lg border border-custom shadow-sm cursor-pointer group relative overflow-hidden">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4 relative z-10">
                        <i data-lucide="shield-check"></i>
                    </div>
                    <h3 className="font-bold text-main text-lg">Admin Users</h3>
                    <p className="text-xs text-sub mt-2 leading-relaxed">Manage staff roles, permissions, and security access logs.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="theme-card lg:col-span-2 bg-card border border-custom radius-lg p-8 shadow-sm">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="font-bold text-main text-lg">Weekly Occupancy</h3>
                            <p className="text-xs text-sub">Live room availability data</p>
                        </div>
                        <select className="bg-input border border-custom text-xs font-bold p-2 radius-md text-main outline-none focus:border-accent"><option>This Week</option><option>Last Week</option></select>
                    </div>
                    <div className="h-64 w-full flex items-end justify-between gap-6 px-4 border-b border-custom pb-4 relative">
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0">
                            <div className="w-full h-px bg-custom border-t border-dashed border-custom opacity-30"></div>
                            <div className="w-full h-px bg-custom border-t border-dashed border-custom opacity-30"></div>
                            <div className="w-full h-px bg-custom border-t border-dashed border-custom opacity-30"></div>
                            <div className="w-full h-px bg-custom border-t border-dashed border-custom opacity-30"></div>
                        </div>

                        {[45, 68, 52, 88, 96, 72, 80].map((h, i) => (
                            <div className="flex-1 flex flex-col items-center gap-3 group cursor-pointer z-10 relative h-full justify-end">
                                <div className="w-full bg-input/50 rounded-t-xl relative overflow-hidden h-full flex items-end hover:bg-input transition-colors duration-300">
                                    <div className="w-full bg-accent transition-all duration-700 ease-out rounded-t-lg group-hover:brightness-110 relative" style={{ height: `${h}%` }}>
                                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-main text-bg-app text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">{h}%</span>
                                    </div>
                                </div>
                                <span className="text-xs font-bold text-sub uppercase tracking-wider group-hover:text-accent transition-colors">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="theme-card bg-card border border-custom radius-lg p-6 shadow-sm flex flex-col h-full">
                    <h3 className="font-bold text-main text-lg mb-6">Live Operations</h3>

                    <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scroll max-h-[300px]">
                        <div className="p-4 bg-panel border border-custom radius-md shadow-sm flex items-center gap-3 hover:border-accent transition-colors cursor-pointer">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                            <span className="text-sm font-medium text-main">Room 204: Towels Requested</span>
                        </div>
                        <div className="p-4 bg-panel border border-custom radius-md shadow-sm flex items-center gap-3 hover:border-accent transition-colors cursor-pointer">
                            <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]"></div>
                            <span className="text-sm font-medium text-main">Room 101: Late Checkout</span>
                        </div>
                        <div className="p-4 bg-panel border border-custom radius-md shadow-sm flex items-center gap-3 hover:border-accent transition-colors cursor-pointer">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                            <span className="text-sm font-medium text-main">Lobby: AC Maintenance</span>
                        </div>
                        <div className="p-4 bg-panel border border-custom radius-md shadow-sm flex items-center gap-3 hover:border-accent transition-colors cursor-pointer">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                            <span className="text-sm font-medium text-main">Room 305: Room Service</span>
                        </div>
                    </div>

                    <button className="mt-6 w-full py-3 bg-panel border border-custom text-accent text-sm font-bold radius-md hover:bg-accent hover:text-white transition-all shadow-sm">
                        View All Tasks
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {generateStatCard('Active Guests', '142', '+12%', 'users', 'text-blue-500', 'bg-blue-500')}
                {generateStatCard('Pending Requests', '8', '-2', 'bell', 'text-amber-500', 'bg-amber-500')}
                {generateStatCard('Avg Response', '1.2m', '0.4s', 'zap', 'text-green-500', 'bg-green-500')}
                {generateStatCard('Satisfaction', '98%', '+1%', 'heart', 'text-pink-500', 'bg-pink-500')}
            </div>
        </div>
    )
}

export default AdminDashboardPage;
