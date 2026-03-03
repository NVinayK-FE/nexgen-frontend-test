"use client";

import Button from "@/components/shared/core/ui/button";
import Input from "@/components/shared/core/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";

const ChangeEmailPage: React.FC = () => {
    const [currentEmail, setCurrentEmail] = useState("");
    const [newEmail, setNewEmail] = useState("");

    return (
        <div className="theme-card max-w-2xl">
            <div className="flex items-start gap-4 mb-8">
                <div className="theme-layer-primary-hover w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="theme-layer-secondary text-xl font-bold mb-1 text-left">Update Email Address</h3>
                    <p className="text-sm text-left">Change the email associated with your NexGen Guest account.</p>
                </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); }} className="space-y-6">
                <div>
                    <label
                        htmlFor="current-email"
                        className="block text-xs font-medium mb-2 text-left"
                    >
                        Current Email
                    </label>
                    <Input
                        type="email"
                        id="current-email"
                        name="current-email"
                        placeholder="Enter your current email"
                        value={currentEmail}
                        onChange={(e) => setCurrentEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="new-email"
                        className="block text-xs font-medium mb-2 text-left"
                    >
                        New Email Address
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

                <div className="flex justify-end mt-6">
                    <Button label="Save Email Changes" buttonVariant="active" />
                </div>
            </form>
        </div>
    )
}

export default ChangeEmailPage;
