"use client";

import ContentTitle from "@/components/shared/content/content-title";
import Input from "@/components/shared/core/ui/input";
import { mockRoles } from "@/data/roles";
import Button from "@core/ui/button";
import { ChevronLeft, ChevronRight, FilterIcon, Info, Plus, SearchIcon } from "lucide-react";
import { useState } from "react";

const RolesPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const [roles] = useState(mockRoles);

    const filteredRoles = roles.filter(role =>
        role.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleEditRole = (roleName: string) => {
        alert(`Editing permissions for: ${roleName}`);
    };

    const handleEditClick = () => {
        // Navigate to edit permissions page with role name or id
        // navigate(`/edit-permissions/${role.name.toLowerCase().replace(/\s+/g, '-')}`);
        // Or if you have an id: navigate(`/edit-permissions/${role.id}`);
    };

    return (
        <div>
            <div className="flex items-start justify-between mb-8">
                <ContentTitle title="Role Management"
                    description="Define and manage system-wide access levels and user permissions." />
                <Button icon={Plus} label="Create New Role" />
            </div>

            <div className="flex gap-3 mb-6">
                <div className="flex-1">
                    <Input
                        type="text"
                        icon={SearchIcon}
                        placeholder="Search roles by name or status..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <Button icon={FilterIcon} label="Filter" onClick={() => { }} />
            </div>

            <div className="t-card rounded-xl overflow-hidden mb-8">
                {/* Table Header */}
                <div className="grid pb-4 text-xs border-b border-[#1E2D42]" style={{ gridTemplateColumns: "2.5fr 1.8fr 1.8fr 1.6fr" }}>
                    <span>ROLE NAME</span>
                    <span>USERS ASSIGNED</span>
                    <span>LAST UPDATED</span>
                    <span className="flex justify-end">ACTIONS</span>
                </div>

                {roles.map((role) => (
                    <div className="py-2 text-sm grid items-center border-b border-(--container-br) last:border-b-0 hover:bg-[#3B82F6]/5 transition-colors" style={{ gridTemplateColumns: "2.5fr 1.8fr 1.8fr 1.6fr" }} key={role.id}>
                        <div className="flex items-center gap-2">
                            <div
                                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 gap-2"
                                style={{ background: role.iconBg, border: `1px solid ${role.iconBg}` }}
                            >
                                <role.icon className="w-4 h-4" style={{ color: role.iconColor }} />
                            </div>
                            <span className="text-sm text-(--container-sub-nav-fg-hover)">{role.name}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-(-container-sub-nav-fg-hover)">{role.usersCount}</span>
                            <span className="text-(--container-fg)">active users</span>
                        </div>

                        <div className="text-(--container-fg)">{role.lastUpdated}</div>

                        <div className="flex justify-end">
                            <Button
                                onClick={handleEditClick}
                                label="Edit Permissions"
                            />
                        </div>
                    </div>
                ))}

                {/* Table Footer */}
                <div className="flex items-center justify-between px-7 py-4 border-t border-[#1E2D42]">
                    <div className="text-[0.875rem] text-[#64748B]">
                        Showing <strong className="text-[#94A3B8]">{mockRoles.length}</strong> of{" "}
                        <strong className="text-[#94A3B8]">{mockRoles.length}</strong> results
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Button
                            buttonVariant="outline"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            icon={ChevronLeft}
                        />
                        <Button
                            buttonVariant="outline"
                            label="1"
                        />
                        <Button
                            buttonVariant="outline"
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            icon={ChevronRight}
                        />
                    </div>
                </div>
            </div>


            <div className="bg-(--container-bg) border border-(--container-br) rounded-xl p-6 flex items-start gap-4">
                <div className="">
                    <Info className="w-4 h-4 text-(--container-sub-nav-fg-hover)" />
                </div>
                <div>
                    <div className="text-(--container-sub-nav-fg-hover) font-bold mb-1.5">Permission Auditing</div>
                    <div className="text-(--container-fg) leading-relaxed">
                        Changes to system roles are logged in the Global Activity Feed. We recommend reviewing
                        high-level permissions monthly to maintain enterprise security compliance standards.
                    </div>
                </div>
            </div>
        </div>


    )
}

export default RolesPage;
