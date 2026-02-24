"use client";

import { Button } from "@/components/common/core/ui/button";
import { Lock, Info } from "lucide-react";
import { useState } from "react";


const ChangePasswordPage = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle password change logic here
    };

    return (
        <div className="animate-[fadeIn_0.3s_ease-out]">
            <div className="bg-[#1E293B] border border-[#1E293B] rounded-xl p-10">
                <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <Lock className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                        <h3 className="text-slate-100 text-xl font-bold mb-1 text-left">Update Password</h3>
                        <p className="text-slate-400 text-sm text-left">Strengthen your account security by updating your password.</p>
                    </div>
                </div>

                <form onSubmit={onSubmitHandler} className="space-y-6">
                    {/* <PasswordLabel label="Current Password" id="current-password" name="current-password"
                        value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <PasswordLabel label="New Password" id="new-password" name="new-password"
                                value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                            {newPassword && (
                                <>
                                    <div className="h-1 bg-[#1E293B] rounded-full overflow-hidden mt-2">
                                        <div className="h-full transition-all duration-300"
                                            style={{ width: `${passwordStrength.strength}%`, backgroundColor: passwordStrength.color }} />
                                    </div>
                                    <p className="text-xs mt-1 text-left" style={{ color: passwordStrength.color }}>
                                        {passwordStrength.text}
                                    </p>
                                </>
                            )}
                        </div>

                        <div>
                            <PasswordLabel label="Confirm Password" id="confirm-password" name="confirm-password"
                                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            {confirmPassword && (
                                <p className="text-xs mt-1 text-left" style={{ color: passwordsMatch ? '#10B981' : '#EF4444' }}>
                                    {passwordsMatch ? '✓ Passwords match' : '✗ Passwords do not match'}
                                </p>
                            )}
                        </div>
                    </div> */}

                    <div className="flex items-start gap-2 text-slate-400 text-sm text-left">
                        <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <p className="text-left">Password must be at least 8 characters and include uppercase, lowercase, number, and special character.</p>
                    </div>

                    <div className="flex justify-end gap-3 mt-6">
                        <button type="button" onClick={() => { setCurrentPassword(''); setNewPassword(''); setConfirmPassword(''); }}
                            className="bg-[#1E293B] text-slate-400 px-6 py-3 rounded-lg font-semibold text-sm border border-slate-700 
      hover:text-slate-50 hover:border-slate-600 hover:bg-slate-800 transition-all">
                            Cancel
                        </button>
                        <Button>Update Password</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ChangePasswordPage; 
