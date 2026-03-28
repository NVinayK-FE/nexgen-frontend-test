"use client";

import React, { useState } from "react";
import { Copyright, ArrowLeft, Mail, X, KeyRound } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { goToSignIn } from "@/utils/route";

const ResetPasswordForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(true);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const handleBackToLogin = () => goToSignIn(router);

  const handleOpenChange = (open: boolean) => {
    setDialogOpen(open);
    if (!open) router.push("/");
  };

  return (
    <div className="min-h-screen bg-slate-950 font-['Outfit',-apple-system,BlinkMacSystemFont,sans-serif]">
      {/* Radial background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(30,41,59,0.4)_0%,rgba(2,6,23,0.8)_70%)] pointer-events-none" />

      <Dialog open={dialogOpen} onOpenChange={handleOpenChange}>
        <DialogContent
          className="
            bg-[#1E293B] border border-slate-700 rounded-3xl
            shadow-[0_18px_35px_-12px_rgba(0,0,0,0.5)]
            w-[calc(100%-2rem)] max-w-lg p-0
            focus:outline-none
            [&>button.absolute]:text-slate-400
            [&>button.absolute]:hover:text-slate-50
            [&>button.absolute]:transition-colors
          "
        >
          {/* Inner flex column — gap controls ALL spacing */}
          <div className="flex flex-col gap-5 px-12 py-10">
            {/* Logo */}
            <div className="flex justify-center">
              <Image
                src="/logow.webp"
                alt="NexGen Guest"
                width={160}
                height={48}
                className="opacity-75"
                priority
              />
            </div>

            {/* Icon + Title + Description */}
            <DialogHeader className="flex flex-col items-center gap-3 space-y-0 text-center p-0">
              {/* <div className="w-11 h-11 rounded-2xl bg-slate-800 border border-slate-600 flex items-center justify-center flex-shrink-0">
                <KeyRound className="w-5 h-5 text-blue-500" />
              </div> */}

              <DialogTitle className="text-base font-bold text-slate-200 tracking-widest uppercase leading-tight">
                Reset Your Password
              </DialogTitle>

              <DialogDescription className="text-slate-400 text-xs leading-relaxed text-center">
                Enter the email address associated with your
                <br />
                account and we&apos;ll send you a link to reset your
                <br />
                password.
              </DialogDescription>
            </DialogHeader>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="email"
                  className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest"
                >
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@nexgenguest.com"
                  required
                  className="
                    h-11 px-4 rounded-xl text-sm
                    bg-slate-900 border-slate-600
                    text-slate-50 placeholder:text-slate-500
                    focus-visible:border-slate-400
                    focus-visible:ring-2 focus-visible:ring-slate-400/20
                    transition-all duration-200
                  "
                />
              </div>

              <Button
                type="submit"
                className="
                  relative h-11 w-full rounded-xl font-semibold text-xs
                  uppercase tracking-widest
                  bg-slate-900 border border-slate-600 text-slate-50
                  transition-all duration-300 overflow-hidden group
                  hover:bg-blue-600 hover:border-blue-500
                  hover:shadow-[0_0_24px_rgba(37,99,235,0.45)]
                "
              >
                <span className="relative z-10">Send Reset Link</span>
                <span className="absolute inset-0 w-0 group-hover:w-full bg-blue-600 transition-all duration-300 ease-out" />
              </Button>
            </form>

            {/* Back to login */}
            <button
              onClick={handleBackToLogin}
              className="flex items-center justify-center gap-2 text-[10px] text-slate-400 uppercase tracking-widest font-semibold hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Login
            </button>

            {/* Footer */}
            <div className="flex flex-col items-center gap-1 pt-1 border-t border-slate-700/50">
              <p className="text-slate-600 text-[10px] tracking-wider uppercase">
                2026 All Rights Reserved
              </p>
              <span className="inline-flex items-center gap-1 text-slate-600 text-[10px]">
                <Copyright className="w-3 h-3" />
                NexGen Guest Inc.
              </span>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Toast */}
      <div
        className={`fixed top-6 right-6 bg-[#1E293B] border border-slate-700 border-l-4 border-l-blue-600
        rounded-xl p-4 shadow-xl max-w-xs z-[9999]
        transition-all duration-500 ease-in-out ${
          showToast
            ? "translate-x-0 opacity-100"
            : "translate-x-[120%] opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div className="flex flex-col gap-0.5">
            <span className="font-semibold text-slate-200 text-xs uppercase tracking-wider">
              Email Sent
            </span>
            <span className="text-slate-400 text-xs leading-relaxed">
              Check your inbox for the reset link.
            </span>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="text-slate-500 hover:text-slate-200 transition-colors ml-auto"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
