import React, { useState } from "react";
import { Copyright, ArrowLeft, Mail, X } from "lucide-react";
import logoImage from "@/assets/logow.webp";
import StarsEffect from "../../../utils/starseffect";
import { useNavigate } from "react-router-dom";

const ForgetPasswordPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [showToast, setShowToast] = useState(false);


    // Inside component:
    const navigate = useNavigate();



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Password reset requested for:', email);

        // Show toast notification
        setShowToast(true);

        // Auto-hide after 5 seconds
        setTimeout(() => {
            setShowToast(false);
        }, 5000);
    };

    const handleBackToLogin = () => {
        navigate('/');
    };
    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-slate-950 relative overflow-hidden font-['Outfit',-apple-system,BlinkMacSystemFont,sans-serif]">
            {/* Radial gradient background effect */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] 
                    bg-[radial-gradient(circle_at_center,rgba(30,41,59,0.3)_0%,rgba(30,41,59,0.1)_40%,transparent_70%)] 
                    blur-[80px] animate-pulse" />

            {/* Stars effect */}
            <StarsEffect />

            {/* Reset Password Card */}
            <div className="relative w-full max-w-lg z-10 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
                <div className="relative bg-[#1E293B] text-[#A7A8A9] py-12 px-12 rounded-3xl shadow-[0_18px_35px_-24px_rgba(148,163,184,0.35)]">

                    {/* Logo */}
                    <div className="relative z-10 text-center mb-8 animate-[fadeInDown_0.8s_ease-out]">
                        <img
                            src={logoImage}
                            alt="NexGen Guest"
                            className="w-48 mx-auto mb-4 opacity-75"
                        />
                    </div>

                    {/* Title & Description */}
                    <div className="text-center mb-8">
                        <h1 className="text-lg text-white/80 font-bold text-slate-200 mb-3 tracking-wide uppercase">
                            Reset Your Password
                        </h1>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Enter the email address associated with your<br />
                            account and we'll send you a link to reset your<br />
                            password.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider text-left"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3.5 rounded-xl text-sm 
                         bg-[#1E293B] border border-slate-600 
                         text-slate-50 placeholder:text-slate-500 
                         focus:outline-none focus:border-slate-400 
                         focus:bg-slate-900 focus:ring-4 focus:ring-slate-400/10 
                         transition-all duration-300"
                                placeholder="you@nexgenguest.com"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="relative w-full py-4 rounded-xl font-medium text-sm 
                       uppercase tracking-widest mt-8 
                       bg-[#1E293B] border border-slate-600 text-slate-50
                       transition-all duration-300 overflow-hidden group
                       hover:bg-blue-600 hover:border-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                        >
                            <span className="relative z-10">
                                Send Reset Link
                            </span>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                            w-0 h-0 rounded-full bg-blue-600/20 
                            group-hover:w-[300px] group-hover:h-[300px] 
                            transition-all duration-600">
                            </div>
                        </button>
                    </form>

                    {/* Back to Login */}
                    <div className="text-center mt-6">
                        <button
                            onClick={handleBackToLogin}
                            className="inline-flex items-center gap-2 text-xs text-slate-400 uppercase tracking-wider font-medium hover:text-blue-600 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back to Login</span>
                        </button>
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-12">
                        <p className="text-slate-500 text-xs">
                            2026 ALL RIGHTS RESERVED<br />
                            <span className="inline-flex items-center gap-1 mt-1">
                                <Copyright className="w-3 h-3" />
                                NexGen Guest Inc.
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Toast Notification */}
            <div
                className={`fixed top-8 right-8 bg-[#1E293B] border border-slate-600 border-l-4 border-l-blue-600 
                   rounded-xl p-4 shadow-[0_18px_35px_-24px_rgba(148,163,184,0.35)] max-w-md z-50
                   transition-all duration-400 ${showToast ? 'translate-x-0 opacity-100' : 'translate-x-[500px] opacity-0'}`}
            >
                <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div className="flex-1">
                        <div className="font-semibold text-slate-200 text-sm uppercase tracking-wider">
                            Email Sent
                        </div>
                        <div className="text-slate-400 text-xs mt-0.5">
                            Check your inbox, you will receive a reset link shortly.
                        </div>
                    </div>
                    <button
                        onClick={() => setShowToast(false)}
                        className="text-slate-400 hover:text-slate-50 transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Custom animations */}
            <style>{`
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
};

export default ForgetPasswordPage;
