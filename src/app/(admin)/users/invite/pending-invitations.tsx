"use client";

import React, { useState } from "react";
import { 
  ChevronDown, 
  Mail, 
  Copy, 
  Check, 
  Clock, 
  RefreshCw,
  Home,
  MessageSquare,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  BarChart2,
  Search,
  Filter,
  Download,
  X
} from "lucide-react";

// Mock data for stats
const statsData = [
  {
    id: 1,
    title: "TOTAL PENDING",
    value: "24",
    icon: <Clock className="w-5 h-5 text-amber-400" />,
    trend: "+12%",
    trendUp: true,
    subtitle: "Awaiting response"
  },
  {
    id: 2,
    title: "EXPIRING TODAY",
    value: "8",
    icon: <Mail className="w-5 h-5 text-orange-400" />,
    subtitle: "Expire in next 24h"
  },
  {
    id: 3,
    title: "AVG. RESPONSE",
    value: "2.4d",
    icon: <BarChart2 className="w-5 h-5 text-blue-400" />,
    subtitle: "Time to accept"
  }
];

// Mock data for invitations
const mockInvitations = [
  { 
    id: 1, 
    email: "jordan.smyth@nexgen.com", 
    role: "Editor", 
    sentAt: "2 hours ago", 
    expiresIn: "46 hours",
    avatarColor: "from-blue-500 to-blue-700",
    initials: "JS"
  },
  { 
    id: 2, 
    email: "marcia.brown@nexgen.com", 
    role: "Admin", 
    sentAt: "1 day ago", 
    expiresIn: "24 hours",
    avatarColor: "from-indigo-500 to-indigo-700",
    initials: "MB"
  },
  { 
    id: 3, 
    email: "kevin.wang@nexgen.com", 
    role: "Viewer", 
    sentAt: "3 days ago", 
    expiresIn: "—",
    avatarColor: "from-slate-500 to-slate-700",
    initials: "KW"
  },
  { 
    id: 4, 
    email: "lisa.ray@nexgen.com", 
    role: "Editor", 
    sentAt: "5 days ago", 
    expiresIn: "Expired",
    expired: true,
    avatarColor: "from-slate-500 to-slate-700",
    initials: "LR"
  },
  { 
    id: 5, 
    email: "michael.chen@nexgen.com", 
    role: "Admin", 
    sentAt: "12 hours ago", 
    expiresIn: "36 hours",
    avatarColor: "from-blue-500 to-blue-700",
    initials: "MC"
  },
  { 
    id: 6, 
    email: "sarah.williams@nexgen.com", 
    role: "Editor", 
    sentAt: "3 hours ago", 
    expiresIn: "45 hours",
    avatarColor: "from-indigo-500 to-indigo-700",
    initials: "SW"
  }
];

// Sidebar Link Component
const SidebarLink = ({ icon, active = false, title }: { icon: React.ReactNode; active?: boolean; title: string }) => (
  <a 
    href="#" 
    title={title}
    className={`w-full h-12 flex items-center justify-center rounded-lg transition-all ${
      active 
        ? 'bg-blue-600 text-white' 
        : 'text-slate-500 hover:text-blue-400 hover:bg-blue-500/10'
    }`}
  >
    {icon}
  </a>
);

// Stat Card Component
const StatCard = ({ stat }: { stat: any }) => (
  <div className="bg-[#1E293B] border border-slate-700/30 rounded-xl p-6">
    <div className="flex items-center justify-between mb-3">
      <span className="text-xs font-bold tracking-wider text-slate-500">{stat.title}</span>
      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
        {stat.icon}
      </div>
    </div>
    <div className="text-3xl font-bold text-slate-100 mb-1">{stat.value}</div>
    {stat.trend && (
      <div className="flex items-center gap-1 text-xs">
        <span className={stat.trendUp ? 'text-emerald-400' : 'text-red-400'}>
          {stat.trend}
        </span>
        <span className="text-slate-500">{stat.subtitle}</span>
      </div>
    )}
    {stat.subtitle && !stat.trend && (
      <div className="text-xs text-slate-500">{stat.subtitle}</div>
    )}
  </div>
);

// Invitation Row Component
const InvitationRow = ({ invitation, onCopy, onResend, onCancel, copiedId }: any) => (
  <tr className="border-b border-slate-700/30 hover:bg-blue-500/5 transition-colors">
    <td className="px-6 py-4">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${invitation.avatarColor} flex items-center justify-center text-sm font-bold text-white flex-shrink-0`}>
          {invitation.initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-100">{invitation.email}</div>
          <div className="text-xs text-slate-500">Sent {invitation.sentAt}</div>
        </div>
      </div>
    </td>
    <td className="px-6 py-4">
      <span className={`inline-flex px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider
        ${invitation.role === 'Admin' 
          ? 'text-blue-400 bg-blue-500/10 border border-blue-500/30' 
          : invitation.role === 'Editor'
          ? 'text-purple-400 bg-purple-500/10 border border-purple-500/30'
          : 'text-slate-300 bg-slate-500/10 border border-slate-500/20'}`}>
        {invitation.role}
      </span>
    </td>
    <td className="px-6 py-4">
      <span className={`flex items-center gap-1.5 text-sm ${
        invitation.expired ? 'text-slate-500' : 'text-amber-400'
      }`}>
        <Clock size={14} />
        {invitation.expiresIn}
      </span>
    </td>
    <td className="px-6 py-4">
      <div className="flex items-center justify-end gap-2">
        <button 
          onClick={() => onCopy(invitation.id)}
          className="w-8 h-8 flex items-center justify-center rounded-md text-slate-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all"
          title="Copy invite link"
        >
          {copiedId === invitation.id ? <Check size={14} /> : <Copy size={14} />}
        </button>
        {!invitation.expired && (
          <>
            <button 
              onClick={() => onResend(invitation.id)}
              className="w-8 h-8 flex items-center justify-center rounded-md text-slate-500 hover:text-amber-400 hover:bg-amber-500/10 transition-all"
              title="Resend invitation"
            >
              <RefreshCw size={14} />
            </button>
            <button 
              onClick={() => onCancel(invitation.id)}
              className="w-8 h-8 flex items-center justify-center rounded-md text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition-all"
              title="Cancel invitation"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0h10" />
              </svg>
            </button>
          </>
        )}
      </div>
    </td>
  </tr>
);

const PendingInvitations: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [invitations, setInvitations] = useState(mockInvitations);
  const [filterRole, setFilterRole] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Filter invitations based on search and role
  const filteredInvitations = invitations.filter(inv => {
    const matchesSearch = inv.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = filterRole === "all" || inv.role.toLowerCase() === filterRole.toLowerCase();
    return matchesSearch && matchesRole;
  });

  const handleCopy = (id: number) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
    navigator.clipboard.writeText(`https://nexgen.com/invite/${id}`);
  };

  const handleResend = (id: number) => {
    alert(`Resending invitation to ${invitations.find(i => i.id === id)?.email}`);
  };

  const handleCancel = (id: number) => {
    if (confirm("Cancel this invitation?")) {
      setInvitations(invitations.filter(inv => inv.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] fixed inset-0 overflow-y-auto font-['Outfit',-apple-system,BlinkMacSystemFont,sans-serif]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-[72px] bg-[#0F172A] border-b border-slate-800/30 flex items-center justify-between px-6 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">N</div>
          <span className="text-white font-semibold text-lg">NEXGEN GUEST</span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <img src="https://i.pravatar.cc/150?img=12" alt="Caleb Griffin" className="w-10 h-10 rounded-full" />
          <div>
            <div className="text-slate-100 text-sm font-semibold">Caleb Griffin</div>
            <div className="text-slate-400 text-xs text-left">Admin Access</div>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex pt-[72px] min-h-screen">
        {/* Left Sidebar - Icons */}
        <aside className="w-[88px] fixed left-0 top-[72px] bottom-0 bg-[#0F172A] border-r border-slate-800/30 flex flex-col items-center py-6 z-40">
          <nav className="flex flex-col gap-2 w-full px-3">
            <SidebarLink 
              icon={<Home size={20} />}
              title="Dashboard"
            />
            <SidebarLink 
              icon={<MessageSquare size={20} />}
              title="Messages"
            />
            <SidebarLink 
              icon={<Users size={20} />}
              title="Users"
              active={true}
            />
            <SidebarLink 
              icon={<Settings size={20} />}
              title="Settings"
            />
            <SidebarLink 
              icon={<BarChart2 size={20} />}
              title="Analytics"
            />
          </nav>
          <div className="flex flex-col gap-2 w-full px-3 mt-auto">
            <SidebarLink 
              icon={<HelpCircle size={20} />}
              title="Help"
            />
            <SidebarLink 
              icon={<LogOut size={20} />}
              title="Logout"
            />
          </div>
        </aside>

        {/* Navigation Menu */}
        <nav className="w-[272px] fixed left-[88px] top-[72px] bottom-0 bg-[#0F172A] border-r border-slate-800/30 p-6 z-40">
          <a href="#" className="flex items-center gap-2 text-slate-400 text-sm mb-8 hover:text-slate-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Dashboard
          </a>

          <div className="mb-6">
            <div className="text-xs font-bold tracking-wider text-slate-400 mb-3 text-left">USER MANAGEMENT</div>
            
            <a href="#" className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-blue-500/5 mb-1">
              <Users size={16} />
              User List
            </a>
            
            <a href="#" className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-blue-500/5 mb-1">
              <Settings size={16} />
              Roles & Permissions
            </a>
            
            <a href="#" className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-blue-400 bg-blue-500/10 border border-blue-500/30 relative">
              <Mail size={16} />
              Pending Invitations
              <span className="absolute right-3 w-1.5 h-1.5 bg-blue-400 rounded-full" />
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <main className="ml-[360px] flex-1 bg-[#060D1A] p-8 min-h-screen">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-100 mb-1">Pending Invitations</h1>
              <p className="text-sm text-slate-500">Manage and track sent invitations that haven't been accepted yet.</p>
            </div>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap">
              <Mail size={16} />
              New Invitation
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-5 mb-8">
            {statsData.map(stat => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>

          {/* Search and Filters */}
          <div className="bg-[#1E293B] border border-slate-700/30 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by email..."
                  className="w-full bg-[#0F172A] border border-slate-700 rounded-lg text-slate-100 text-sm placeholder-slate-500 pl-10 pr-4 py-3 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Filter Button */}
              <div className="relative">
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-3 bg-[#0F172A] border border-slate-700 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-100 hover:border-slate-500 transition-all"
                >
                  <Filter size={16} />
                  Filter
                </button>
                
                {showFilters && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#1E293B] border border-slate-700/50 rounded-lg shadow-xl z-50">
                    <div className="p-2">
                      <button 
                        onClick={() => { setFilterRole("all"); setShowFilters(false); }}
                        className={`w-full text-left px-3 py-2 rounded text-sm ${filterRole === "all" ? 'bg-blue-500/10 text-blue-400' : 'text-slate-400 hover:bg-slate-700/50'}`}
                      >
                        All Roles
                      </button>
                      <button 
                        onClick={() => { setFilterRole("admin"); setShowFilters(false); }}
                        className={`w-full text-left px-3 py-2 rounded text-sm ${filterRole === "admin" ? 'bg-blue-500/10 text-blue-400' : 'text-slate-400 hover:bg-slate-700/50'}`}
                      >
                        Admin
                      </button>
                      <button 
                        onClick={() => { setFilterRole("editor"); setShowFilters(false); }}
                        className={`w-full text-left px-3 py-2 rounded text-sm ${filterRole === "editor" ? 'bg-blue-500/10 text-blue-400' : 'text-slate-400 hover:bg-slate-700/50'}`}
                      >
                        Editor
                      </button>
                      <button 
                        onClick={() => { setFilterRole("viewer"); setShowFilters(false); }}
                        className={`w-full text-left px-3 py-2 rounded text-sm ${filterRole === "viewer" ? 'bg-blue-500/10 text-blue-400' : 'text-slate-400 hover:bg-slate-700/50'}`}
                      >
                        Viewer
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Export Button */}
              <button className="flex items-center gap-2 px-4 py-3 bg-[#0F172A] border border-slate-700 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-100 hover:border-slate-500 transition-all">
                <Download size={16} />
                Export
              </button>
            </div>
          </div>

          {/* Invitations Table */}
          <div className="bg-[#1E293B] border border-slate-700/30 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="bg-[#162032] border-b border-slate-700/40">
                    <th className="px-6 py-4 text-left text-xs font-bold tracking-wider text-slate-500">USER</th>
                    <th className="px-6 py-4 text-left text-xs font-bold tracking-wider text-slate-500">ROLE</th>
                    <th className="px-6 py-4 text-left text-xs font-bold tracking-wider text-slate-500">EXPIRES IN</th>
                    <th className="px-6 py-4 text-right text-xs font-bold tracking-wider text-slate-500">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInvitations.length > 0 ? (
                    filteredInvitations.map(invitation => (
                      <InvitationRow 
                        key={invitation.id}
                        invitation={invitation}
                        onCopy={handleCopy}
                        onResend={handleResend}
                        onCancel={handleCancel}
                        copiedId={copiedId}
                      />
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center text-slate-500">
                        No pending invitations found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PendingInvitations;