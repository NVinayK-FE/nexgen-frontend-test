"use client";

import { useState } from "react";
import { Users, Building2, Search, ChevronDown, Plus, Trash2, Info, CheckCircle } from "lucide-react";
import * as Select from "@radix-ui/react-select";
import { cn } from "@/lib/cn";
import Input from "@/components/shared/core/ui/input";

interface InvitePageProps {
    onSubmit?: (data: InviteUserData) => void;
}

interface InviteUserData {
    email: string;
    fullName: string;
    role: string;
    scope: "property" | "all-hotels";
    properties?: string[];
}

export const InvitePage: React.FC<InvitePageProps> = ({ onSubmit }) => {
    const [scope, setScope] = useState<"property" | "all-hotels">("property");
    const [selectedProperties, setSelectedProperties] = useState<string[]>([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [formData, setFormData] = useState<InviteUserData>({
        email: "",
        fullName: "",
        role: "property-manager",
        scope: "property",
        properties: [],
    });

    const mockProperties = [
        "The Grand Hotel",
        "Sunset Resort",
        "Mountain View Inn",
        "Beachfront Paradise",
        "Downtown Plaza Hotel",
    ];

    const filteredProperties = mockProperties.filter((prop) =>
        prop.toLowerCase().includes(searchInput.toLowerCase())
    );

    const handleAddProperty = (property: string) => {
        if (!selectedProperties.includes(property)) {
            setSelectedProperties([...selectedProperties, property]);
        }
    };

    const handleRemoveProperty = (property: string) => {
        setSelectedProperties(selectedProperties.filter((p) => p !== property));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit?.({ ...formData, scope, properties: selectedProperties });
    };

    return (
        <div>
            {/* Page Header */}
            <div className="mb-3">
                <h1 className="text-2xl font-semibold text-(--container-sub-nav-fg-hover) mb-1">Invite User</h1>
                <p className="text-sm text-(--container-fg)">Add a new team member to your organization</p>
            </div>

            {/* Form Card */}
            <div className="t-card p-0 max-w-2xl">
                <form onSubmit={handleSubmit} className="space-y-0">
                    {/* Personal Information Section */}
                    <div className="p-8">
                        <div className="flex items-center gap-2 mb-6">
                            <Users className="w-5 h-5 text-blue-500" />
                            <h2 className="text-xs font-bold uppercase tracking-widest text-(--container-sub-nav-fg-hover)">
                                Personal Information
                            </h2>
                        </div>

                        <div className="space-y-5">
                            <div>
                                <label className="flex items-center gap-1 text-sm text-(--container-fg) mb-2">
                                    Full Name
                                    <Info className="w-4 h-4 text-(--container-fg) cursor-help" />
                                </label>
                                <Input type="text" placeholder="John Doe" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
                            </div>

                            <div>
                                <label className="flex items-center gap-1 text-sm text-(--container-fg) mb-2">
                                    Email Address
                                </label>
                                <Input type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                            </div>

                            <div>
                                <label className="flex items-center gap-1 text-sm text-(--container-fg) mb-2">
                                    Role
                                </label>
                                <Select.Root
                                    value={formData.role}
                                    onValueChange={(value) => setFormData({ ...formData, role: value })}
                                >
                                    <Select.Trigger
                                        className="w-full px-3 py-2 rounded-lg text-sm bg-(--container-bg) border border-(--container-br) text-(--container-fg) focus-visible:border-(--container-sub-nav-br-hover) outline-none transition-all flex items-center justify-between data-[state=open]:border-(--container-sub-nav-br-hover) data-[state=open]:bg-(--container-bg)/80"
                                    >
                                        <Select.Value placeholder="Select role" />
                                        <Select.Icon>
                                            <ChevronDown className="w-4 h-4 text-(--container-fg)" />
                                        </Select.Icon>
                                    </Select.Trigger>
                                    <Select.Portal>
                                        <Select.Content
                                            position="popper"
                                            side="bottom"
                                            align="start"
                                            sideOffset={0}
                                            className="z-50 rounded-lg border border-(--container-br) bg-(--container-bg) shadow-lg w-[var(--radix-select-trigger-width)]"
                                        >
                                            <Select.Viewport className="p-1 w-full">
                                                <Select.Item
                                                    value="property-manager"
                                                    className="px-3 py-2 text-sm text-(--container-fg) rounded-md cursor-pointer outline-none data-[highlighted]:bg-(--container-nav-bg-hover) data-[highlighted]:text-(--container-nav-fg-hover)"
                                                >
                                                    <Select.ItemText>Property Manager</Select.ItemText>
                                                </Select.Item>
                                                <Select.Item
                                                    value="admin"
                                                    className="px-3 py-2 text-sm text-(--container-fg) rounded-md cursor-pointer outline-none data-[highlighted]:bg-(--container-nav-bg-hover) data-[highlighted]:text-(--container-nav-fg-hover)"
                                                >
                                                    <Select.ItemText>Admin</Select.ItemText>
                                                </Select.Item>
                                                <Select.Item
                                                    value="staff"
                                                    className="px-3 py-2 text-sm text-(--container-fg) rounded-md cursor-pointer outline-none data-[highlighted]:bg-(--container-nav-bg-hover) data-[highlighted]:text-(--container-nav-fg-hover)"
                                                >
                                                    <Select.ItemText>Staff</Select.ItemText>
                                                </Select.Item>
                                            </Select.Viewport>
                                        </Select.Content>
                                    </Select.Portal>
                                </Select.Root>
                                <p className="mt-2 text-xs text-(--container-sub-nav-fg-hover)">
                                    <span className="text-(--container-fg)">Can manage properties and users</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Property Access Section */}
                    <div className="p-8">
                        <div className="flex items-center gap-2 mb-6">
                            <Building2 className="w-5 h-5 text-(--container-fg)" />
                            <h2 className="text-xs font-bold uppercase tracking-widest text-(--container-sub-nav-fg-hover)">
                                Property Access
                            </h2>
                        </div>

                        {/* Scope Buttons */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <button
                                type="button"
                                onClick={() => setScope("property")}
                                className={cn(
                                    "flex flex-col items-center gap-2 py-4 px-3 rounded-lg border transition-all cursor-pointer",
                                    scope === "property"
                                        ? "border-(--container-sub-nav-bg-active) bg-(--container-sub-nav-bg-active) hover:border-(--container-sub-nav-br-hover)"
                                        : "border-(--container-br) bg-(--container-br) hover:border-(--container-sub-nav-br-hover) hover:bg-(--container-sub-nav-bg-hover)"
                                )}
                            >
                                <Building2 className={cn("w-5 h-5", scope === "property" ? "text-(--container-sub-nav-fg-active)" : "text-(--container-fg)")} />
                                <span className={cn("text-sm font-bold", scope === "property" ? "text-(--container-sub-nav-fg-active)" : "text-(--container-fg)")}>
                                    Specific Hotels
                                </span>
                            </button>

                            <button
                                type="button"
                                onClick={() => setScope("all-hotels")}
                                className={cn(
                                    "flex flex-col items-center gap-2 py-4 px-3 rounded-lg border transition-all cursor-pointer",
                                    scope === "all-hotels"
                                        ? "border-(--container-sub-nav-bg-active) bg-(--container-sub-nav-bg-active) hover:border-(--container-sub-nav-br-hover)"
                                        : "border-(--container-br) bg-(--container-bg) hover:border-(--container-sub-nav-br-hover) hover:bg-(--container-sub-nav-bg-hover)"
                                )}
                            >
                                <Users className={cn("w-5 h-5", scope === "all-hotels" ? "text-(--container-sub-nav-fg-active)" : "text-(--container-fg)")} />
                                <span className={cn("text-sm font-bold", scope === "all-hotels" ? "text-(--container-sub-nav-fg-active)" : "text-(--container-fg)")}>
                                    All Hotels
                                </span>
                            </button>
                        </div>

                        {/* Show banner and selector only for "Specific Hotels" */}
                        {scope === "property" && (
                            <>
                                {/* Banner */}
                                <div className="flex gap-3 bg-(--container-sub-nav-bg-hover) rounded-lg p-4 mb-6">
                                    <div className="w-8 h-8 rounded-full bg-(--container-sub-nav-bg-hover) border border-(--container-sub-nav-br-hover) flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-4 h-4 text-(--container-sub-nav-fg-active)" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">Grant access to specific properties</p>
                                        <p className="text-xs mt-1">
                                            You can grant access to <strong>individual properties</strong> they can manage
                                        </p>
                                    </div>
                                </div>

                                {/* Property Multi-Select */}
                                <div
                                    className={cn(
                                        "border rounded-lg transition-all cursor-pointer",
                                        dropdownOpen ? "border-(--container-sub-nav-br-hover) rounded-b-none" : "border-(--container-br)",
                                    )}
                                >
                                    <div className="flex flex-wrap items-center gap-2 p-2 min-h-11">
                                        {selectedProperties.map((prop) => (
                                            <div key={prop} className="flex items-center gap-1 text-(--container-sub-nav-fg) bg-(--container-sub-nav-bg-hover) text-xs rounded px-2 py-1">
                                                {prop}
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveProperty(prop)}
                                                    className="w-3 h-3 rounded-full bg-(--container-sub-nav-bg-hover) flex items-center justify-center text-(--container-fg) hover:bg-(--container-sub-nav-br-hover) transition-colors"
                                                >
                                                    <Trash2 className="w-3 h-3" />
                                                </button>
                                            </div>
                                        ))}
                                        <input
                                            type="text"
                                            placeholder="Search or add property..."
                                            value={searchInput}
                                            onChange={(e) => setSearchInput(e.target.value)}
                                            onFocus={() => setDropdownOpen(true)}
                                            className="flex-1 min-w-24 bg-transparent text-sm text-(--container-sub-nav-fg) placeholder-(--container-sub-nav-fg-inactive) outline-none"
                                        />
                                    </div>

                                    <div className="flex items-center justify-between px-3 py-2 border-t border-(--container-sub-nav-br-hover)">
                                        <span className="text-xs text-(--container-sub-nav-fg-inactive)">{selectedProperties.length} selected</span>
                                        <ChevronDown
                                            className={cn("w-4 h-4 text-(--container-sub-nav-fg-inactive) transition-transform", dropdownOpen && "rotate-180")}
                                        />
                                    </div>

                                    {/* Dropdown */}
                                    {dropdownOpen && (
                                        <div className="border-t border-(--container-sub-nav-br-hover) bg-(--container-bg) rounded-b-lg">
                                            <div className="p-2 border-b border-(--container-sub-nav-br-hover)">
                                                <div className="relative">
                                                    <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-(--container-sub-nav-fg-inactive) pointer-events-none" />
                                                    <input
                                                        type="text"
                                                        placeholder="Search properties..."
                                                        value={searchInput}
                                                        onChange={(e) => setSearchInput(e.target.value)}
                                                        className="w-full pl-7 pr-2 py-1 text-xs bg-(--container-sub-nav-bg) text-(--container-sub-nav-fg) placeholder-(--container-sub-nav-fg-inactive) rounded outline-none"
                                                    />
                                                </div>
                                            </div>

                                            <div className="max-h-48 overflow-y-auto">
                                                {filteredProperties.map((prop) => (
                                                    <button
                                                        key={prop}
                                                        type="button"
                                                        onClick={() => {
                                                            handleAddProperty(prop);
                                                            setSearchInput("");
                                                        }}
                                                        className="w-full text-left px-3 py-2 hover:bg-(--container-sub-nav-bg-hover) text-sm text-(--container-sub-nav-fg) flex items-center justify-between"
                                                    >
                                                        <span>{prop}</span>
                                                        <Plus className="w-4 h-4" />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}

                        {scope === "all-hotels" && (
                            <div className="bg-(--container-sub-nav-bg)/50 border border-(--container-sub-nav-br) rounded-lg p-4 text-center">
                                <p className="text-sm text-(--container-sub-nav-fg-inactive)">User will have access to all properties</p>
                            </div>
                        )}
                    </div>

                    {/* Submit */}
                    <div className="p-8 flex justify-end gap-3">
                        <button type="button" className="px-6 py-2 rounded-lg border border-(--container-sub-nav-br) text-(--container-sub-nav-fg) hover:bg-(--container-sub-nav-bg-hover) transition-colors">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-lg bg-(--container-sub-nav-bg-active) text-(--container-sub-nav-fg-active) hover:bg-(--container-sub-nav-bg-hover) transition-colors font-semibold"
                        >
                            Send Invite
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InvitePage;
