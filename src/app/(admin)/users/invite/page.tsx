"use client";

import { useState } from "react";
import { Users, Building2, Search, ChevronDown, Plus, Trash2, Info, CheckCircle } from "lucide-react";
import { cn } from "@/lib/cn";

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
                    <div className="p-8 border-b border-slate-800/50">
                        <div className="flex items-center gap-2 mb-6">
                            <Users className="w-5 h-5 text-blue-500" />
                            <h2 className="text-xs font-bold uppercase tracking-widest text-(--container-sub-nav-fg-hover)">
                                Personal Information
                            </h2>
                        </div>

                        <div className="space-y-5">
                            <div>
                                <label className="flex items-center gap-1 text-sm font-semibold text-(--container-fg) mb-2">
                                    Full Name
                                    <Info className="w-4 h-4 text-(--container-sub-nav-fg-hover) cursor-help" />
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    className="w-full px-3 py-2 rounded-lg text-sm bg-slate-950 border border-slate-700 text-(--container-fg) placeholder-(--container-sub-nav-fg-hover) focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="flex items-center gap-1 text-sm font-semibold text-(--container-fg) mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-3 py-2 rounded-lg text-sm bg-slate-950 border border-slate-700 text-(--container-fg) placeholder-(--container-sub-nav-fg-hover) focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="flex items-center gap-1 text-sm font-semibold text-(--container-fg) mb-2">
                                    Role
                                </label>
                                <div className="relative">
                                    <select
                                        value={formData.role}
                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                        className="w-full px-3 py-2 pr-10 rounded-lg text-sm bg-slate-950 border border-slate-700 text-(--container-fg) focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all appearance-none"
                                    >
                                        <option value="property-manager">Property Manager</option>
                                        <option value="admin">Admin</option>
                                        <option value="staff">Staff</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-(--container-fg) pointer-events-none" />
                                </div>
                                <p className="mt-2 text-xs text-(--container-sub-nav-fg-hover)">
                                    <strong className="text-(--container-fg)">Can manage properties and users</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Property Access Section */}
                    <div className="p-8 border-b border-slate-800/50">
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
                                    "flex flex-col items-center gap-2 py-4 px-3 rounded-lg border-2 transition-all",
                                    scope === "property"
                                        ? "border-(--container-nav-br) bg-(--container-nav-br)"
                                        : "border-slate-700 bg-slate-950 hover:border-blue-500/30"
                                )}
                            >
                                <Building2 className={cn("w-5 h-5", scope === "property" ? "text-blue-400" : "text-(--container-fg)")} />
                                <span className={cn("text-sm font-bold", scope === "property" ? "text-(--container-sub-nav-fg-hover)" : "text-(--container-fg)")}>
                                    Specific Hotels
                                </span>
                            </button>

                            <button
                                type="button"
                                onClick={() => setScope("all-hotels")}
                                className={cn(
                                    "flex flex-col items-center gap-2 py-4 px-3 rounded-lg border-2 transition-all",
                                    scope === "all-hotels"
                                        ? "border-blue-500 bg-blue-500/10"
                                        : "border-slate-700 bg-slate-950 hover:border-blue-500/30"
                                )}
                            >
                                <Users className={cn("w-5 h-5", scope === "all-hotels" ? "text-blue-400" : "text-slate-500")} />
                                <span className={cn("text-sm font-bold", scope === "all-hotels" ? "text-slate-100" : "text-slate-500")}>
                                    All Hotels
                                </span>
                            </button>
                        </div>

                        {/* Show banner and selector only for "Specific Hotels" */}
                        {scope === "property" && (
                            <>
                                {/* Banner */}
                                <div className="flex gap-3 bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-4 h-4 text-green-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-100">Grant access to specific properties</p>
                                        <p className="text-xs text-slate-500 mt-1">
                                            You can grant access to <strong className="text-slate-400">individual properties</strong> they can manage
                                        </p>
                                    </div>
                                </div>

                                {/* Property Multi-Select */}
                                <div
                                    className={cn(
                                        "border rounded-lg transition-all cursor-pointer",
                                        dropdownOpen ? "border-blue-500 ring-4 ring-blue-500/20 rounded-b-none" : "border-slate-700"
                                    )}
                                >
                                    <div className="flex flex-wrap items-center gap-2 p-2 min-h-11">
                                        {selectedProperties.map((prop) => (
                                            <div key={prop} className="flex items-center gap-1 bg-blue-500 text-white text-xs rounded px-2 py-1">
                                                {prop}
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveProperty(prop)}
                                                    className="hover:opacity-70"
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
                                            className="flex-1 min-w-24 bg-transparent text-sm text-slate-100 placeholder-slate-600 outline-none"
                                        />
                                    </div>

                                    <div className="flex items-center justify-between px-3 py-2 border-t border-slate-800">
                                        <span className="text-xs text-slate-500">{selectedProperties.length} selected</span>
                                        <ChevronDown
                                            className={cn("w-4 h-4 text-slate-500 transition-transform", dropdownOpen && "rotate-180")}
                                        />
                                    </div>

                                    {/* Dropdown */}
                                    {dropdownOpen && (
                                        <div className="border-t border-blue-500 bg-slate-950 rounded-b-lg">
                                            <div className="p-2 border-b border-slate-800">
                                                <div className="relative">
                                                    <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-600 pointer-events-none" />
                                                    <input
                                                        type="text"
                                                        placeholder="Search properties..."
                                                        value={searchInput}
                                                        onChange={(e) => setSearchInput(e.target.value)}
                                                        className="w-full pl-7 pr-2 py-1 text-xs bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-600 rounded outline-none"
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
                                                        className="w-full text-left px-3 py-2 hover:bg-slate-900 text-sm text-slate-300 flex items-center justify-between"
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
                            <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-4 text-center">
                                <p className="text-sm text-slate-400">User will have access to all properties</p>
                            </div>
                        )}
                    </div>

                    {/* Submit */}
                    <div className="p-8 flex justify-end gap-3">
                        <button type="button" className="px-6 py-2 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-900 transition-colors">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-semibold"
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
