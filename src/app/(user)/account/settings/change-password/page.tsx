"use client";

import { useState } from "react";
import { Lock, Info, Eye, EyeOff } from "lucide-react";
import Input from "@/components/shared/core/ui/input";
import Button from "@/components/shared/core/ui/button";

const ChangePasswordPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle password change logic here
    };

    return (
        <div className="t-card max-w-2xl">
            <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                    <h3 className="text-(--container-sub-nav-fg-hover) text-xl font-bold mb-1 text-left">Update Password</h3>
                    <p className="text-sm text-left">Strengthen your account security by updating your password.</p>
                </div>
            </div>

            <form onSubmit={onSubmitHandler} className="space-y-6">
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label
                            htmlFor="current-password"
                            className="block text-xs font-medium uppercase tracking-wider"
                        >
                            Current Password
                        </label>
                    </div>
                    <div className="relative">
                        <Input
                            type={showPassword ? "text" : "password"}
                            id="current-password"
                            name="current-password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            placeholder="Enter your current password"
                            className="w-full px-4 py-3.5 rounded-xl text-sm transition-all duration-300 pr-12"
                        />
                        <Button
                            icon={showPassword ? EyeOff : Eye}
                            onClick={() => setShowPassword(!showPassword)}
                            buttonVariant="ghost"
                            className="text-(--container-fg-prompt) absolute right-4 top-1/2 -translate-y-1/2"
                        />
                    </div>
                </div>

                <div className="flex flex-row gap-6">
                    <div className="flex flex-col flex-1 mb-2 gap-2">
                        <label
                            htmlFor="new-password"
                            className="block text-xs font-medium uppercase tracking-wider"
                        >
                            New Password
                        </label>
                        <div className="relative">
                            <Input
                                type={showPassword ? "text" : "password"}
                                id="new-password"
                                name="new-password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Enter your new password"
                                className="w-full px-4 py-3.5 rounded-xl text-sm transition-all duration-300 pr-12"
                            />
                            <Button
                                icon={showPassword ? EyeOff : Eye}
                                onClick={() => setShowPassword(!showPassword)}
                                buttonVariant="ghost"
                                className="text-(--container-fg-prompt) absolute right-4 top-1/2 -translate-y-1/2"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col flex-1 mb-2 gap-2">
                        <label htmlFor="confirm-password"
                            className="block text-xs font-medium uppercase tracking-wider">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <Input
                                type={showPassword ? "text" : "password"}
                                id="confirm-password"
                                name="confirm-password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Enter your new password"
                                className="w-full px-4 py-3.5 rounded-xl text-sm transition-all duration-300 pr-12"
                            />
                            <Button
                                icon={showPassword ? EyeOff : Eye}
                                onClick={() => setShowPassword(!showPassword)}
                                buttonVariant="ghost"
                                className="text-(--container-fg-prompt) absolute right-4 top-1/2 -translate-y-1/2"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-start gap-2 text-sm text-left">
                    <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-left">Password must be at least 8 characters and include uppercase, lowercase, number, and special character.</p>
                </div>

                <div className="flex justify-end mt-6">
                    <Button label="Update Password" buttonVariant="active" />
                </div>
            </form>
        </div>


        //     <div className="animate-[fadeIn_0.3s_ease-out]">
        //         <div className="t-card">
        //             <div className="flex items-start gap-4 mb-8">
        //                 <div className="w-12 h-12 rounded-lg bg-(--container-sub-nav-bg-active) flex items-center justify-center flex-shrink-0">
        //                     <Lock className="w-6 h-6 text-(--container-sub-nav-fg-active)" />
        //                 </div>
        //                 <div>
        //                     <p className="text-(--container-sub-nav-fg-hover) text-md font-semibold mb-1 text-left">Update Password</p>
        //                     <p className="text-(--container-fg) text-sm text-left">Strengthen your account security by updating your password.</p>
        //                 </div>
        //             </div>

        //             <form onSubmit={onSubmitHandler} className="space-y-6">
        //                 {/* <PasswordLabel label="Current Password" id="current-password" name="current-password"
        //                     value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />

        //                 <div className="grid grid-cols-2 gap-6">
        //                     <div>
        //                         <PasswordLabel label="New Password" id="new-password" name="new-password"
        //                             value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        //                         {newPassword && (
        //                             <>
        //                                 <div className="h-1 bg-[#1E293B] rounded-full overflow-hidden mt-2">
        //                                     <div className="h-full transition-all duration-300"
        //                                         style={{ width: `${passwordStrength.strength}%`, backgroundColor: passwordStrength.color }} />
        //                                 </div>
        //                                 <p className="text-xs mt-1 text-left" style={{ color: passwordStrength.color }}>
        //                                     {passwordStrength.text}
        //                                 </p>
        //                             </>
        //                         )}
        //                     </div>

        //                     <div>
        //                         <PasswordLabel label="Confirm Password" id="confirm-password" name="confirm-password"
        //                             value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        //                         {confirmPassword && (
        //                             <p className="text-xs mt-1 text-left" style={{ color: passwordsMatch ? '#10B981' : '#EF4444' }}>
        //                                 {passwordsMatch ? '✓ Passwords match' : '✗ Passwords do not match'}
        //                             </p>
        //                         )}
        //                     </div>
        //                 </div> */}

        //                 <div className="flex items-start gap-2 text-sm text-left">
        //                     <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
        //                     <p className="text-left">Password must be at least 8 characters and include uppercase, lowercase, number, and special character.</p>
        //                 </div>

        //                 <div className="flex justify-end gap-3 mt-6">
        //                     <button type="button" onClick={() => { setCurrentPassword(''); setNewPassword(''); setConfirmPassword(''); }}
        //                         className="bg-[#1E293B] text-slate-400 px-6 py-3 rounded-lg font-semibold text-sm border border-slate-700 
        //   hover:text-slate-50 hover:border-slate-600 hover:bg-slate-800 transition-all">
        //                         Cancel
        //                     </button>
        //                     <Button label="Update Password" />
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
    );
}

export default ChangePasswordPage; 
