"use client";

import { ChevronLeft, Mail, Lock } from "lucide-react";
import { useState } from "react";

const AccountSettingsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [activeSection, setActiveSection] = useState<'email' | 'password'>('email');
    return (
        <div className="flex flex-row">
            <div className="w-80 min-h-screen px-6 py-8 bg-[#0F172A] border-r border-slate-800/10">
                <a href="#" onClick={(e) => { e.preventDefault(); }}
                    className="flex items-center gap-2 text-slate-400 hover:text-slate-200 mb-8 transition-colors pl-3">
                    <ChevronLeft className="w-5 h-5" />
                    <span className="text-sm font-medium">Back to Dashboard</span>
                </a>

                <h1 className="text-slate-100 text-base font-bold mb-8 tracking-wide pl-3 text-left">ACCOUNT SETTINGS</h1>

                <div className="space-y-2">
                    <div onClick={() => setActiveSection('email')}
                        className={`flex items-center justify-start gap-3.5 w-full text-left px-5 py-4 rounded-xl cursor-pointer transition-all text-[15px] font-medium border relative
                    ${activeSection === 'email' ? 'text-blue-500 bg-blue-600/12 border-blue-600/40 font-semibold shadow-[0_2px_8px_rgba(59,130,246,0.15)]'
                                : 'text-slate-400 bg-transparent border-transparent hover:text-slate-50 hover:bg-blue-600/8 hover:border-blue-600/20'}`}>
                        <Mail className="w-5 h-5 flex-shrink-0" />
                        <span>Update Email</span>
                        {activeSection === 'email' && <div className="absolute right-3 w-1.5 h-1.5 bg-blue-500 rounded-full" />}
                    </div>

                    <div onClick={() => setActiveSection('password')}
                        className={`flex items-center justify-start gap-3.5 w-full text-left px-5 py-4 rounded-xl cursor-pointer transition-all text-[15px] font-medium border relative
                    ${activeSection === 'password' ? 'text-blue-500 bg-blue-600/12 border-blue-600/40 font-semibold shadow-[0_2px_8px_rgba(59,130,246,0.15)]'
                                : 'text-slate-400 bg-transparent border-transparent hover:text-slate-50 hover:bg-blue-600/8 hover:border-blue-600/20'}`}>
                        <Lock className="w-5 h-5 flex-shrink-0" />
                        <span>Update Password</span>
                        {activeSection === 'password' && <div className="absolute right-3 w-1.5 h-1.5 bg-blue-500 rounded-full" />}
                    </div>
                </div>
            </div>
            <div className="flex-1 p-10">
                {children}
            </div>
        </div>
    );
}

export default AccountSettingsLayout;
