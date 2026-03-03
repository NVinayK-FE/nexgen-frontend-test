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
import { Content } from "next/font/google";
import ContentTitle from "@/components/shared/content/content-title";
import Button from "@/components/shared/core/ui/button";

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
                                        "flex flex-col items-center gap-2 py-4 px-3 rounded-lg theme-layer-border transition-all",
                                        inviteFormData.propertyScope === propertyScope.value
                                            ? "theme-layer-secondary-hover"
                                            : "cursor-pointer hover:theme-layer-secondary-hover",
                                    )}
                                >
                                    <Building2 className={cn("w-5 h-5", inviteFormData.propertyScope === propertyScope.value && "theme-layer-secondary")} />
                                    <span className={cn("", inviteFormData.propertyScope === propertyScope.value && "theme-layer-secondary")}>
                                        {propertyScope.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    )}

                {
                    inviteFormData.propertyScope === PropertyScope.ALL && (
                        <div className="theme-layer-secondary-hover flex gap-3 rounded-lg p-4 mb-6">
                            <div className="theme-layer-secondary-hover-border w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                                <CheckCircle className="theme-layer-primary w-4 h-4" />
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
                            <div className="theme-layer-secondary-hover flex gap-3 rounded-lg p-4 mb-6">
                                <div className="w-8 h-8 rounded-full theme-layer-secondary-hover-border flex items-center justify-center shrink-0">
                                    <CheckCircle className="theme-layer-primary w-4 h-4" />
                                </div>
                                <div>
                                    <p className="font-bold">Grant access to specific properties</p>
                                    <p className="text-xs mt-1">
                                        You can grant access to <strong>individual properties</strong> they can manage
                                    </p>
                                </div>
                            </div>

                            < div
                                className={cn(
                                    "rounded-lg transition-all cursor-pointer",
                                    "theme-layer-border-top rounded-b-none",
                                )}
                            >
                                <div className="flex flex-wrap items-center gap-2 p-2 min-h-11">
                                    {
                                        inviteFormData.selectedProperties?.length === 0 && (
                                            <span className="text-xs">No properties selected. Please select properties from the list below.</span>
                                        )
                                    }
                                    {inviteFormData.selectedProperties?.map((prop) => (
                                        <div key={prop.propertyId} className="theme-layer-secondary-hover hover:theme-layer-secondary-hover-border flex items-center gap-1 rounded px-2 py-1">
                                            {prop.name}
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveProperty(prop)}
                                                className="w-3 h-3 rounded-full flex items-center justify-center transition-colors"
                                            >
                                                <Trash2 className="w-3 h-3" />
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <div className="theme-layer theme-layer-border rounded-b-lg">
                                    {/* {selectedProperties.length > 5 && (
                                        <div className="p-2 theme-layer-border-bottom">
                                            <div className="relative">
                                                <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-(--container-sub-nav-fg-inactive) pointer-events-none" />
                                                <input
                                                    type="text"
                                                    placeholder="Search properties..."
                                                    value={searchInput}
                                                    onChange={(e) => setSearchInput(e.target.value)}
                                                    className="tw-full pl-7 pr-2 py-1 text-xs placeholder-(--container-sub-nav-fg-inactive) rounded outline-none"
                                                />
                                            </div>
                                        </div>
                                    )} */}

                                    <div className="max-h-48 overflow-y-auto">
                                        {getFilterProperties().map((prop) => (
                                            <button
                                                key={prop.propertyId}
                                                type="button"
                                                onClick={() => {
                                                    handleAddProperty(prop);
                                                    setSearchInput("");
                                                }}
                                                className="w-full text-left px-3 py-2 hover:theme-layer-secondary-hover flex items-center justify-between cursor-pointer"
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
            <ContentTitle title="Invite User" description="Add a new team member to your organization" />

            {/* Form Card */}
            <div className="theme-card max-w-2xl">
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="flex items-center gap-1 mb-2">
                            Full Name
                        </label>
                        <Input type="text" placeholder="John Doe" value={inviteFormData.fullName} onChange={(e) => setInviteFormData({ ...inviteFormData, fullName: e.target.value })} />
                    </div>

                    <div className="mb-6">
                        <label className="flex items-center gap-1  mb-2">
                            Email
                            <Info className="w-4 h-4 cursor-help" />
                        </label>
                        <Input type="email" placeholder="john@example.com" value={inviteFormData.email} onChange={(e) => setInviteFormData({ ...inviteFormData, email: e.target.value })} />
                    </div>

                    <div className="mb-6">
                        <label className="flex items-center gap-1 mb-2">
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
                        <Button
                            label="Cancel"
                            buttonVariant="outline"
                        />
                        <Button
                            buttonVariant="active"
                            label="Send Invite"
                        />
                    </div>
                </form>
            </div >
        </div >
    );
};

export default InvitePage;
