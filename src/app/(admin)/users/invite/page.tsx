"use client";

import { cn } from "@/lib/cn";
import { useState } from "react";
import Input from "@shared/core/ui/input";
import { getRoleSelectItems, ROLES } from "@/data/roles";
import ReactSelect from "@core/radix-ui/react-select";
import { Building2, Search, Plus, Trash2, Info, CheckCircle, Check } from "lucide-react";
import { getDefaultInviteUserData, IInviteUserData, IPropertyScope, IPropertyScopeOption, PropertyScope, propertyScopeOptions } from "@/data/invite";
import { useUserStore } from "@/stores/user-store";
import { IProperty } from "@/data/property";

interface IInvitePageProps {
    onSubmit?: (data: IInviteUserData) => void;
}

export const InvitePage: React.FC<IInvitePageProps> = ({ onSubmit }) => {
    const { selectedProperties } = useUserStore().user;
    const [searchInput, setSearchInput] = useState("");
    const [inviteFormData, setInviteFormData] = useState<IInviteUserData>(getDefaultInviteUserData());

    const getFilterProperties = (): IProperty[] => {
        if (searchInput === "") {
            return selectedProperties;
        }
        const searchInputLowerCase = searchInput.toLowerCase();
        return selectedProperties.filter((property) => {
            return property.name.toLowerCase().includes(searchInputLowerCase);
        });
    };

    const handleAddProperty = (property: IProperty) => {
        if (!inviteFormData.selectedProperties?.some((p) => p.propertyId === property.propertyId)) {
            setInviteFormData({
                ...inviteFormData,
                selectedProperties: [...(inviteFormData.selectedProperties || []), property],
            });
        }
    };

    const handleRemoveProperty = (property: IProperty) => {
        setInviteFormData({
            ...inviteFormData,
            selectedProperties: inviteFormData.selectedProperties?.filter((p) => p.propertyId !== property.propertyId),
        });
    };

    const setPropertyScope = (propertyScope: IPropertyScope) => {
        setInviteFormData({
            ...inviteFormData,
            propertyScope: propertyScope,
            selectedProperties: [],
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit?.({ ...inviteFormData, selectedProperties: inviteFormData.selectedProperties });
    };

    const PropertyScopeComponent = () => {
        return (
            <>
                {!(inviteFormData.role === ROLES.MASTER_ADMIN ||
                    inviteFormData.role === ROLES.SUPER_ADMIN) && (
                        <div className={`grid grid-cols-${propertyScopeOptions.length} gap-3 mb-6`}>
                            {propertyScopeOptions.map((propertyScope) => (
                                <button
                                    key={propertyScope.value}
                                    type="button"
                                    onClick={() => {
                                        if (inviteFormData.propertyScope === propertyScope.value) {
                                            return;
                                        }
                                        setPropertyScope(propertyScope.value);
                                    }}
                                    className={cn(
                                        "flex flex-col items-center gap-2 py-4 px-3 rounded-lg border border-(--container-br) transition-all",
                                        inviteFormData.propertyScope === propertyScope.value
                                            ? "bg-(--container-sub-nav-bg-active)"
                                            : "cursor-pointer hover:bg-(--container-sub-nav-bg-hover)"
                                    )}
                                >
                                    <Building2 className={cn("w-5 h-5", inviteFormData.propertyScope === propertyScope.value ? "text-(--container-sub-nav-fg-active)" : "text-(--container-fg)")} />
                                    <span className={cn("text-sm font-bold", inviteFormData.propertyScope === propertyScope.value ? "text-(--container-sub-nav-fg-active)" : "text-(--container-fg)")}>
                                        {propertyScope.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    )}

                {
                    inviteFormData.propertyScope === PropertyScope.ALL && (
                        <div className="flex gap-3 bg-(--container-sub-nav-bg-hover) rounded-lg p-4 mb-6">
                            <div className="w-8 h-8 rounded-full bg-(--container-sub-nav-bg-hover) border border-(--container-sub-nav-br-hover) flex items-center justify-center shrink-0">
                                <CheckCircle className="w-4 h-4 text-(--container-sub-nav-fg-active)" />
                            </div>
                            <div>
                                <p className="text-sm font-bold">Grant access to all properties</p>
                                <p className="text-xs mt-1">
                                    You can grant access to <strong>all properties</strong> they can manage
                                </p>
                            </div>
                        </div>
                    )
                }

                {
                    inviteFormData.propertyScope === PropertyScope.SPECIFIC && (
                        <>
                            <div className="flex gap-3 bg-(--container-sub-nav-bg-hover) rounded-lg p-4 mb-6">
                                <div className="w-8 h-8 rounded-full bg-(--container-sub-nav-bg-hover) border border-(--container-sub-nav-br-hover) flex items-center justify-center shrink-0">
                                    <CheckCircle className="w-4 h-4 text-(--container-sub-nav-fg-active)" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Grant access to specific properties</p>
                                    <p className="text-xs mt-1">
                                        You can grant access to <strong>individual properties</strong> they can manage
                                    </p>
                                </div>
                            </div>

                            < div
                                className={cn(
                                    "border rounded-lg transition-all cursor-pointer",
                                    "border-(--container-br) rounded-b-none",
                                )}
                            >
                                <div className="flex flex-wrap items-center gap-2 p-2 min-h-11">
                                    {
                                        inviteFormData.selectedProperties?.length === 0 && (
                                            <span className="text-xs text-(--container-sub-nav-fg-inactive)">No properties selected. Please select properties from the list below.</span>
                                        )
                                    }
                                    {inviteFormData.selectedProperties?.map((prop) => (
                                        <div key={prop.propertyId} className="flex items-center gap-1 text-(--container-sub-nav-fg) bg-(--container-sub-nav-bg-hover) text-xs rounded px-2 py-1">
                                            {prop.name}
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveProperty(prop)}
                                                className="w-3 h-3 rounded-full bg-(--container-sub-nav-bg-hover) flex items-center justify-center text-(--container-fg) hover:bg-(--container-sub-nav-br-hover) transition-colors"
                                            >
                                                <Trash2 className="w-3 h-3" />
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-(--container-br) bg-(--container-bg) rounded-b-lg">
                                    {selectedProperties.length > 5 && (
                                        <div className="p-2 border-b border-(--container-br)">
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
                                    )}

                                    <div className="max-h-48 overflow-y-auto">
                                        {getFilterProperties().map((prop) => (
                                            <button
                                                key={prop.propertyId}
                                                type="button"
                                                onClick={() => {
                                                    handleAddProperty(prop);
                                                    setSearchInput("");
                                                }}
                                                className="w-full text-left px-3 py-2 hover:bg-(--container-sub-nav-bg-hover) text-sm text-(--container-sub-nav-fg) flex items-center justify-between cursor-pointer"
                                            >
                                                <span>{prop.name}</span>
                                                {
                                                    inviteFormData.selectedProperties?.find((p) => p.propertyId === prop.propertyId) !== undefined
                                                        ? <Check className="w-4 h-4" />
                                                        : <Plus className="w-4 h-4" />
                                                }
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </>
        )
    };

    return (
        <div>
            {/* Page Header */}
            <div className="mb-3">
                <h1 className="text-2xl font-semibold text-(--container-sub-nav-fg-hover) mb-1">Invite User</h1>
                <p className="text-sm text-(--container-fg)">Add a new team member to your organization</p>
            </div>

            {/* Form Card */}
            <div className="t-card max-w-2xl">
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="flex items-center gap-1 text-sm text-(--container-fg) mb-2">
                            Full Name
                        </label>
                        <Input type="text" placeholder="John Doe" value={inviteFormData.fullName} onChange={(e) => setInviteFormData({ ...inviteFormData, fullName: e.target.value })} />
                    </div>

                    <div className="mb-6">
                        <label className="flex items-center gap-1 text-sm text-(--container-fg) mb-2">
                            Email
                            <Info className="w-4 h-4 text-(--container-fg) cursor-help" />
                        </label>
                        <Input type="email" placeholder="john@example.com" value={inviteFormData.email} onChange={(e) => setInviteFormData({ ...inviteFormData, email: e.target.value })} />
                    </div>

                    <div className="mb-6">
                        <label className="flex items-center gap-1 text-sm text-(--container-fg) mb-2">
                            Role
                        </label>
                        <ReactSelect
                            value={inviteFormData.role}
                            options={getRoleSelectItems}
                            onChange={(value) => {
                                setInviteFormData({
                                    ...inviteFormData,
                                    role: value,
                                    propertyScope: value === ROLES.MASTER_ADMIN ||
                                        value === ROLES.SUPER_ADMIN
                                        ? PropertyScope.ALL : PropertyScope.SPECIFIC,
                                    selectedProperties: [],
                                });
                            }}
                            placeholder="Select role"
                        />
                    </div>

                    {inviteFormData.role != "" && <PropertyScopeComponent />}

                    < div className="p-8 flex justify-end gap-3" >
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
            </div >
        </div >
    );
};

export default InvitePage;
