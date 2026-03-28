"use client";

import React, { useState } from "react";
import { ChevronDown, Clock, Check, Copy, RefreshCw, Trash2, Send } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
  const [sentInvitations, setSentInvitations] = useState<IInvitation[]>([
    { id: 1, email: "jordan.smyth@nexgen.com", role: "Editor", status: "Pending", sentAt: "2 hours ago", expiresIn: "46 hours" },
    { id: 2, email: "marcia.brown@nexgen.com", role: "Admin", status: "Pending", sentAt: "1 day ago", expiresIn: "24 hours" },
    { id: 3, email: "kevin.wang@nexgen.com", role: "Viewer", status: "Accepted", sentAt: "3 days ago", expiresIn: "—" },
    { id: 4, email: "lisa.ray@nexgen.com", role: "Editor", status: "Expired", sentAt: "5 days ago", expiresIn: "Expired" },
  ]);

  const handleCopyLink = (id: number, index: number) => {
    navigator.clipboard.writeText(`https://nexgen.com/invite/${id}`);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleResend = (id: number) => {
    alert(`Resending invitation for ID: ${id}`);
  };

  const handleCancel = (id: number) => {
    if (confirm("Cancel this invitation?")) {
      setSentInvitations(prev => prev.filter(inv => inv.id !== id));
    }
  };
  

  const getStatusBadge = (status: IInvitation["status"]) => {
    switch (status) {
      case "Pending":
        return (
          <Badge className="gap-1.5 bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20">
            <Clock className="w-3 h-3" /> Pending
          </Badge>
        );
      case "Accepted":
        return (
          <Badge className="gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20">
            <Check className="w-3 h-3" /> Accepted
          </Badge>
        );
      case "Expired":
        return (
          <Badge className="bg-slate-700/40 text-slate-500 border border-slate-700/50 hover:bg-slate-700/60">
            Expired
          </Badge>
        );
    }
  };

  const getRoleBadge = (role: string) => {
    const isAdmin = role === "Admin";
    return (
      <Badge className={`text-[10px] font-bold uppercase tracking-wider ${
        isAdmin
          ? "bg-blue-500/10 text-blue-400 border border-blue-500/30 hover:bg-blue-500/20"
          : "bg-slate-500/10 text-slate-300 border border-slate-500/20 hover:bg-slate-500/20"
      }`}>
        {role}
      </Badge>
    );
  };

  const stats = [
    { label: "Pending Invites", status: "Pending", icon: <Clock className="w-4 h-4 text-amber-400" /> },
    { label: "Accepted", status: "Accepted", icon: <Check className="w-4 h-4 text-emerald-400" /> },
    { label: "Expired", status: "Expired", icon: <Clock className="w-4 h-4 text-slate-500" /> },
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-[#020617] font-['Outfit',sans-serif]">

        {/* Header */}
        <header className="fixed top-0 left-0 right-0 h-[72px] bg-[#0F172A] border-b border-slate-800/30 flex items-center justify-between px-6 z-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-sm">N</div>
            <span className="text-white font-semibold text-lg tracking-wide">NEXGEN GUEST</span>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <img src="https://i.pravatar.cc/150?img=12" alt="Caleb Griffin" className="w-9 h-9 rounded-full" />
            <div>
              <div className="text-slate-100 text-sm font-semibold">Caleb Griffin</div>
              <div className="text-slate-400 text-xs">Admin Access</div>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
        </header>

        <div className="flex pt-[72px] min-h-screen">

          {/* Icon Sidebar */}
          <aside className="w-[88px] fixed left-0 top-[72px] bottom-0 bg-[#0F172A] border-r border-slate-800/30 flex flex-col items-center py-6 z-40">
            <nav className="flex flex-col gap-2 w-full px-3">
              {[
                { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", active: false },
                { icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z", active: false },
                { icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", active: true },
                { icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z", active: false },
                { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", active: false },
              ].map((item, i) => (
                <a key={i} href="#" className={`w-full h-12 flex items-center justify-center rounded-lg transition-all ${
                  item.active ? "bg-blue-600 text-white" : "text-slate-500 hover:text-blue-400 hover:bg-blue-500/10"
                }`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d={item.icon} />
                  </svg>
                </a>
              ))}
            </nav>
          </aside>

          {/* Nav Sidebar */}
          <nav className="w-[272px] fixed left-[88px] top-[72px] bottom-0 bg-[#0F172A] border-r border-slate-800/30 p-6 z-40">
            <a href="/dashboard" className="flex items-center gap-2 text-slate-400 text-sm mb-8 hover:text-slate-200 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Back to Dashboard
            </a>

            <div className="mb-6">
              <div className="text-[10px] font-bold tracking-widest text-slate-500 mb-3 uppercase">User Management</div>
              {[
                { label: "User List", href: "/users/list", icon: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 7 a4 4 0 1 1-8 0 4 4 0 0 1 8 0z", active: false },
                { label: "Roles & Permissions", href: "/users/roles", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", active: false },
                { label: "Invite User", href: "/users/invite", icon: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M8.5 7 a4 4 0 1 1-8 0 4 4 0 0 1 8 0z M20 8 v6 M23 11 h-6", active: false },
                { label: "Invitation Sent", href: "/users/invitation-sent", icon: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z", active: true },
              ].map((item) => (
                <a key={item.label} href={item.href} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium mb-1 transition-all relative ${
                  item.active
                    ? "text-blue-400 bg-blue-500/10 border border-blue-500/30"
                    : "text-slate-400 hover:text-slate-200 hover:bg-blue-500/5"
                }`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d={item.icon} />
                  </svg>
                  {item.label}
                  {item.active && <span className="absolute right-3 w-1.5 h-1.5 bg-blue-400 rounded-full" />}
                </a>
              ))}
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1 ml-[360px] bg-[#0F1922] min-h-screen p-8">

            {/* Page Header */}
            <div className="flex flex-col gap-1 mb-6">
              <h1 className="text-2xl font-bold text-slate-100">Invitation Sent</h1>
              <p className="text-sm text-slate-500">Track and manage all your sent invitations.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5 mb-8">
              {stats.map(({ label, status, icon }) => (
                <Card key={status} className="bg-[#1E293B] border-slate-700/30 rounded-xl">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 pt-5 px-6">
                    <CardTitle className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                      {label}
                    </CardTitle>
                    {icon}
                  </CardHeader>
                  <CardContent className="px-6 pb-5">
                    <div className="text-3xl font-bold text-slate-100">
                      {sentInvitations.filter(i => i.status === status).length}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Table Card */}
            <Card className="bg-[#1E293B] border-slate-700/30 rounded-xl overflow-hidden">
              <CardHeader className="px-6 py-4 bg-[#162032] border-b border-slate-700/40 rounded-none">
                <CardTitle className="text-sm font-semibold text-slate-100">Sent Invitations</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[#162032] border-b border-slate-700/40 hover:bg-transparent">
                      {["Email", "Role", "Status", "Sent", "Expires", "Actions"].map((h) => (
                        <TableHead key={h} className={`text-[10px] font-bold tracking-widest text-slate-500 uppercase py-4 ${h === "Actions" ? "text-right" : ""}`}>
                          {h}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sentInvitations.map((invite, index) => (
                      <TableRow key={invite.id} className="border-b border-slate-700/30 hover:bg-blue-500/5 transition-colors">
                        <TableCell className="py-4 text-sm text-slate-300">{invite.email}</TableCell>
                        <TableCell className="py-4">{getRoleBadge(invite.role)}</TableCell>
                        <TableCell className="py-4">{getStatusBadge(invite.status)}</TableCell>
                        <TableCell className="py-4 text-sm text-slate-400">{invite.sentAt}</TableCell>
                        <TableCell className="py-4 text-sm text-slate-400">{invite.expiresIn}</TableCell>
                        <TableCell className="py-4">
                          <div className="flex items-center justify-end gap-1">
                            {invite.status === "Pending" && (
                              <>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleCopyLink(invite.id, index)}
                                      className="w-8 h-8 text-slate-500 hover:text-blue-400 hover:bg-blue-500/10"
                                    >
                                      {copiedIndex === index ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent side="top" className="bg-slate-800 text-slate-200 border-slate-700 text-xs">
                                    Copy invite link
                                  </TooltipContent>
                                </Tooltip>

                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleResend(invite.id)}
                                      className="w-8 h-8 text-slate-500 hover:text-amber-400 hover:bg-amber-500/10"
                                    >
                                      <RefreshCw className="w-3.5 h-3.5" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent side="top" className="bg-slate-800 text-slate-200 border-slate-700 text-xs">
                                    Resend invitation
                                  </TooltipContent>
                                </Tooltip>

                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleCancel(invite.id)}
                                      className="w-8 h-8 text-slate-500 hover:text-red-400 hover:bg-red-500/10"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent side="top" className="bg-slate-800 text-slate-200 border-slate-700 text-xs">
                                    Cancel invitation
                                  </TooltipContent>
                                </Tooltip>
                              </>
                            )}
                            {invite.status !== "Pending" && (
                              <span className="text-xs text-slate-600 pr-2">—</span>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

          </main>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default InvitationSentPage;