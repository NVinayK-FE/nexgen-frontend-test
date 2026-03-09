"use client";

import React, { useState } from "react";
import { ChevronDown, Clock, Check, Copy, RefreshCw } from "lucide-react";

interface IInvitation {
    id: number;
    email: string;
    role: string;
    status: "Pending" | "Accepted" | "Expired";
    sentAt: string;
    expiresIn: string;
}

const InvitationSentPage: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Mock data for sent invitations
  const [sentInvitations, setSentInvitations] = useState<IInvitation[]>([
    { id: 1, email: "jordan.smyth@nexgen.com", role: "Editor", status: "Pending", sentAt: "2 hours ago", expiresIn: "46 hours" },
    { id: 2, email: "marcia.brown@nexgen.com", role: "Admin", status: "Pending", sentAt: "1 day ago", expiresIn: "24 hours" },
    { id: 3, email: "kevin.wang@nexgen.com", role: "Viewer", status: "Accepted", sentAt: "3 days ago", expiresIn: "—" },
    { id: 4, email: "lisa.ray@nexgen.com", role: "Editor", status: "Expired", sentAt: "5 days ago", expiresIn: "Expired" },
  ]);

  const handleCopyLink = (id: number, index: number, link: string) => {
    navigator.clipboard.writeText(link);    
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleResend = (id: number) => {
    alert(`Resending invitation for ID: ${id}`);
  };

  const handleCancel = (id: number) => {
    if (confirm("Cancel this invitation?")) {
      setSentInvitations(sentInvitations.filter(inv => inv.id !== id));
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "Pending":
        return <span className="flex items-center gap-1.5 text-amber-400"><Clock size={14} /> Pending</span>;
      case "Accepted":
        return <span className="flex items-center gap-1.5 text-emerald-400"><Check size={14} /> Accepted</span>;
      case "Expired":
        return <span className="flex items-center gap-1.5 text-slate-500">Expired</span>;
      default:
        return <span className="text-slate-500">{status}</span>;
    }
  };

  const getRoleBadgeClass = (role: string) => {
    switch(role) {
      case "Admin":
        return "text-blue-400 bg-blue-500/10 border border-blue-500/30";
      default:
        return "text-slate-300 bg-slate-500/10 border border-slate-500/20";
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] font-['Outfit',sans-serif]">
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

      {/* Main Layout Container */}
      <div className="flex pt-[72px] min-h-screen">
        {/* Left Sidebar - Icons */}
        <aside className="w-[88px] fixed left-0 top-[72px] bottom-0 bg-[#0F172A] border-r border-slate-800/30 flex flex-col items-center py-6 z-40">
          <nav className="flex flex-col gap-2 w-full px-3">
            {/* Dashboard Icon */}
            <a href="#" className="w-full h-12 flex items-center justify-center rounded-lg text-slate-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </a>
            
            {/* Messages Icon */}
            <a href="#" className="w-full h-12 flex items-center justify-center rounded-lg text-slate-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
            
            {/* Users Icon - Active */}
            <a href="#" className="w-full h-12 flex items-center justify-center rounded-lg bg-blue-600 text-white transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </a>
            
            {/* Settings Icon */}
            <a href="#" className="w-full h-12 flex items-center justify-center rounded-lg text-slate-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
            </a>
            
            {/* Analytics Icon */}
            <a href="#" className="w-full h-12 flex items-center justify-center rounded-lg text-slate-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </a>
          </nav>
        </aside>

        {/* Second Sidebar - Navigation */}
        <nav className="w-[272px] fixed left-[88px] top-[72px] bottom-0 bg-[#0F172A] border-r border-slate-800/30 p-6 z-40">
          <a href="/dashboard" className="flex items-center gap-2 text-slate-400 text-sm mb-8 hover:text-slate-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Dashboard
          </a>

          <div className="mb-6">
            <div className="text-xs font-bold tracking-wider text-slate-400 mb-3 text-left">USER MANAGEMENT</div>
            
            {/* User List Button */}
            <a href="/users/list" className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-blue-500/5 mb-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              User List
            </a>
            
            {/* Roles & Permissions Button */}
            <a href="/users/roles" className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-blue-500/5 mb-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Roles & Permissions
            </a>
            
            {/* Invite User Button */}
            <a href="/users/invite" className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-blue-500/5 mb-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <line x1="20" y1="8" x2="20" y2="14" />
                <line x1="23" y1="11" x2="17" y2="11" />
              </svg>
              Invite User
            </a>
            
            {/* Invitation Sent Button - Active */}
            <a href="/users/invitation-sent" className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-blue-400 bg-blue-500/10 border border-blue-500/30 relative">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
              Invitation Sent
              <span className="absolute right-3 w-1.5 h-1.5 bg-blue-400 rounded-full" />
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 ml-[360px] bg-[#0F1922] min-h-screen">
          <div className="p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-slate-100 mb-1">Invitation Sent</h1>
                <p className="text-sm text-slate-500">Track and manage all your sent invitations.</p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-5 mb-8">
              {/* Pending Invites */}
              <div className="bg-[#1E293B] border border-slate-700/30 rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold tracking-wider text-slate-500">PENDING INVITES</span>
                  <Clock size={18} className="text-amber-400" />
                </div>
                <div className="text-3xl font-bold text-slate-100">
                  {sentInvitations.filter(i => i.status === "Pending").length}
                </div>
              </div>

              {/* Accepted */}
              <div className="bg-[#1E293B] border border-slate-700/30 rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold tracking-wider text-slate-500">ACCEPTED</span>
                  <Check size={18} className="text-emerald-400" />
                </div>
                <div className="text-3xl font-bold text-slate-100">
                  {sentInvitations.filter(i => i.status === "Accepted").length}
                </div>
              </div>

              {/* Expired */}
              <div className="bg-[#1E293B] border border-slate-700/30 rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold tracking-wider text-slate-500">EXPIRED</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-500">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-slate-100">
                  {sentInvitations.filter(i => i.status === "Expired").length}
                </div>
              </div>
            </div>

            {/* Sent Invitations Table */}
            <div className="bg-[#1E293B] border border-slate-700/30 rounded-xl overflow-hidden">
              <div className="px-6 py-4 bg-[#162032] border-b border-slate-700/40">
                <h3 className="text-sm font-semibold text-slate-100">Sent Invitations</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#162032] border-b border-slate-700/40">
                      <th className="px-6 py-4 text-left text-xs font-bold tracking-wider text-slate-500">EMAIL</th>
                      <th className="px-6 py-4 text-left text-xs font-bold tracking-wider text-slate-500">ROLE</th>
                      <th className="px-6 py-4 text-left text-xs font-bold tracking-wider text-slate-500">STATUS</th>
                      <th className="px-6 py-4 text-left text-xs font-bold tracking-wider text-slate-500">SENT</th>
                      <th className="px-6 py-4 text-left text-xs font-bold tracking-wider text-slate-500">EXPIRES</th>
                      <th className="px-6 py-4 text-right text-xs font-bold tracking-wider text-slate-500">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sentInvitations.map((invite, index) => (
                      <tr key={invite.id} className="border-b border-slate-700/30 hover:bg-blue-500/5 transition-colors">
                        <td className="px-6 py-4 text-sm text-slate-300">{invite.email}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${getRoleBadgeClass(invite.role)}`}>
                            {invite.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {getStatusBadge(invite.status)}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-400">{invite.sentAt}</td>
                        <td className="px-6 py-4 text-sm text-slate-400">{invite.expiresIn}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            {invite.status === "Pending" && (
                              <>
                                <button 
                                  onClick={() => handleCopyLink(invite.id, index, `https://nexgen.com/invite/${invite.id}`)}
                                  className="w-8 h-8 flex items-center justify-center rounded-md text-slate-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all"
                                  title="Copy invite link"
                                >
                                  {copiedIndex === index ? <Check size={14} /> : <Copy size={14} />}
                                </button>
                                <button 
                                  onClick={() => handleResend(invite.id)}
                                  className="w-8 h-8 flex items-center justify-center rounded-md text-slate-500 hover:text-amber-400 hover:bg-amber-500/10 transition-all"
                                  title="Resend invitation"
                                >
                                  <RefreshCw size={14} />
                                </button>
                                <button 
                                  onClick={() => handleCancel(invite.id)}
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
                            {invite.status === "Accepted" && (
                              <span className="text-xs text-slate-500">—</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InvitationSentPage;