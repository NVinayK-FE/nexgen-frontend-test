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
        <div className="theme-card max-w-2xl">
            <div className="flex items-start gap-4 mb-8">
                <div className="theme-layer-primary-hover w-12 h-12 rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="theme-layer-primary text-xl font-bold mb-1 text-left">Update Password</h3>
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
                        />
                        <Button
                            icon={showPassword ? EyeOff : Eye}
                            onClick={() => setShowPassword(!showPassword)}
                            buttonVariant="tertiary"
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-(--color-layer-placeholder)"
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
                            />
                            <Button
                                icon={showPassword ? EyeOff : Eye}
                                onClick={() => setShowPassword(!showPassword)}
                                buttonVariant="tertiary"
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-(--color-layer-placeholder)"
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
                            />
                            <Button
                                icon={showPassword ? EyeOff : Eye}
                                onClick={() => setShowPassword(!showPassword)}
                                buttonVariant="tertiary"
                                className="absolute right-4 top-1/2 -translate-y-1/2"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-start gap-2 text-sm text-left">
                    <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-left">Password must be at least 8 characters and include uppercase, lowercase, number, and special character.</p>
                </div>

                <div className="flex justify-end mt-6 gap-2">
                    <Button label="Cancel" buttonVariant="outline" />
                    <Button label="Update Password" buttonVariant="active" />
                </div>
            </form>
        </div>
    );
}

export default ChangePasswordPage; 
