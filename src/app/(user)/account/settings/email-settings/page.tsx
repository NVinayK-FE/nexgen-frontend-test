"use client";

import Button from "@/components/shared/core/ui/button";
import Input from "@/components/shared/core/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";

const ChangeEmailPage: React.FC = () => {
    const [currentEmail] = useState("caleb@nexgenguest.com");
    const [newEmail, setNewEmail] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");

    return (
        <div className="theme-card max-w-2xl">
            <div className="flex items-start gap-4 mb-8">
                <div className="theme-layer-primary-hover w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="theme-layer-secondary text-xl font-bold mb-1 text-left">Email Settings</h3>
                    <p>Change the email associated with your NexGen Guest account.</p>
                </div>
            </div>

            <div className="pb-6 flex flex-row gap-1">
                <div className="font-medium mb-1 text-left">CURRENT EMAIL:</div>
                <div className="text-(--color-layer-placeholder)">{currentEmail}</div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); }} className="space-y-6">
                <div>
                    <label
                        htmlFor="new-email"
                        className="block text-xs font-medium mb-2 text-left"
                    >
                        NEW EMAIL
                    </label>
                    <Input
                        type="email"
                        id="new-email"
                        name="new-email"
                        placeholder="Enter your new email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="current-password"
                        className="block text-xs font-medium mb-2 text-left"
                    >
                        ENTER CURRENT PASSWORD &gt; TO UPDATE ACCOUNT EMAIL
                    </label>
                    <Input
                        type="password"
                        id="current-password"
                        name="current-password"
                        placeholder="Enter your current password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="flex justify-end mt-6 gap-2">
                    <Button label="Cancel" buttonVariant="outline" />
                    <Button label="Update" buttonVariant="active" />
                </div>
            </form>
        </div>
    )
}

export default ChangeEmailPage;
