"use client";

import CardSubTitle from "@/components/shared/core/card/card-sub-title";
import CardTitle from "@/components/shared/core/card/card-title";
import FlexRow from "@/components/shared/core/flex/flex-row";
import Button from "@/components/shared/core/ui/button";
import Input from "@/components/shared/core/ui/input";
import { mockUsers, UserRowProps } from "@/data/user";
import Card from "@core/card/card";
import FlexCol from "@shared/core/flex/flex-col";
import { Download, ListFilter, Search, SearchIcon, SquarePen, Trash2 } from "lucide-react";
import { useState } from "react";

const UsersListPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [users] = useState(mockUsers);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const stats = {
        totalUsers: 1284,
        activeNow: 42,
        pendingInvites: 8
    };

    const handleEdit = (user: typeof mockUsers[0]) => {
        // TODO: Implement edit logic
    };

    const handleDelete = (user: typeof mockUsers[0]) => {
        // TODO: Implement delete logic
    };

    const UserRow = ({ user, onEdit, onDelete }: UserRowProps) => {
        const getRoleBadge = (role: string) => {
            switch (role) {
                case 'Admin':
                    return {
                        bg: 'bg-[#3B82F6]/10',
                        border: 'border-[#3B82F6]/30',
                        text: 'text-[#60A5FA]'
                    };
                case 'Editor':
                case 'Viewer':
                default:
                    return {
                        bg: 'bg-[#94A3B8]/10',
                        border: 'border-[#94A3B8]/20',
                        text: 'text-[#94A3B8]'
                    };
            }
        };

        const getStatus = (status: string) => {
            switch (status) {
                case 'Active':
                    return {
                        dot: 'bg-[#10B981]',
                        text: 'text-[#10B981]'
                    };
                case 'Inactive':
                    return {
                        dot: 'bg-[#475569]',
                        text: 'text-[#64748B]'
                    };
                case 'Pending':
                    return {
                        dot: 'bg-[#F59E0B]',
                        text: 'text-[#F59E0B]'
                    };
                default:
                    return {
                        dot: 'bg-[#475569]',
                        text: 'text-[#64748B]'
                    };
            }
        };

        const roleStyle = getRoleBadge(user.role);
        const statusStyle = getStatus(user.status);

        return (
            <tr className="border-b border-[#1E2D42] last:border-b-0 hover:bg-[#3B82F6]/5 transition-colors">
                <td className="py-3">
                    <div className="flex items-center gap-3">
                        <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-xs text-white shrink-0"
                            style={{ background: user.avatarColor }}
                        >
                            {user.initials}
                        </div>
                        <div className="text-sm">
                            <div className="text-(--container-sub-nav-fg-hover)">{user.name}</div>
                            <div className="text-xs mt-0.5">{user.joinedDate}</div>
                        </div>
                    </div>
                </td>
                <td className="py-3">{user.email}</td>
                <td className="py-3">
                    <span className={`text-xs uppercase`}>
                        {user.role}
                    </span>
                </td>
                <td className="py-3">
                    <span className={`inline-flex items-center gap-1.5 text-[0.875rem] font-medium ${statusStyle.text}`}>
                        <span className={`w-2 h-2 rounded-full ${statusStyle.dot}`} />
                        {user.status}
                    </span>
                </td>
                <td className="py-3 text-right">
                    <div className="inline-flex items-center">
                        <Button
                            onClick={() => onEdit(user)}
                            icon={SquarePen}
                            buttonVariant="outline"
                            className="p-1"
                        />
                        <Button
                            icon={Trash2}
                            onClick={() => onDelete(user)}
                            buttonVariant="outline"
                            className="p-1"
                        />
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <FlexCol className="gap-6">
            <div className="grid grid-cols-3 gap-4">
                {/* Total Pending */}

                <Card className="flex flex-col gap-3">
                    <div className="flex items-start justify-between">
                        <span className="text-2xs">TOTAL PENDING</span>
                        <div className="w-4 h-4">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="9" y1="15" x2="9.01" y2="15" /><line x1="15" y1="15" x2="15.01" y2="15" /></svg>
                        </div>
                    </div>
                    <div className="text-2xl font-semibold text-(--container-sub-nav-fg-hover) leading-none">4</div>
                    <FlexRow className="text-green-500 gap-2">
                        <span className="w-4 h-4">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                        </span>
                        <span className="text-2xs">12% increase from last week</span>
                    </FlexRow>
                </Card>

                {/* Expiring Soon */}
                <Card className="flex flex-col gap-3">
                    <div className="flex items-start justify-between">
                        <span className="text-2xs">EXPIRING SOON</span>
                        <div className="w-4 h-4">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                        </div>
                    </div>
                    <div className="text-2xl font-semibold text-(--container-sub-nav-fg-hover) leading-none">5</div>
                    <div className="text-2xs">Invitations expire in less than 48h</div>
                </Card>

                {/* Avg Wait Time */}
                <Card className="flex flex-col gap-3">
                    <div className="flex items-start justify-between">
                        <span className="text-2xs">AVG. WAIT TIME</span>
                        <div className="w-4 h-4">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        </div>
                    </div>
                    <div className="text-2xl font-semibold text-(--container-sub-nav-fg-hover) leading-none">2.4 Days</div>
                    <div className="text-2xs">Time before acceptance</div>
                </Card>
            </div>

            <div className="flex gap-3 mb-6">
                <div className="relative flex-1">
                    <SearchIcon className="w-4 h-4 text-(--container-fg) absolute left-3 top-1/2 -translate-y-1/2" />
                    <Input
                        type="text"
                        placeholder="Search users by name, email or role..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <Button
                    icon={ListFilter}
                    onClick={() => { }}
                    label="Filters"
                />
                <Button
                    icon={Download}
                    onClick={() => { }}
                    label="Export"
                />
            </div>

            <Card>
                <table className="w-full border-collapse table-fixed">
                    <colgroup>
                        <col className="w-[29%]" />
                        <col className="w-[25%]" />
                        <col className="w-[14%]" />
                        <col className="w-[16%]" />
                        <col className="w-[16%]" />
                    </colgroup>
                    <thead>
                        <tr className="border-b border(--container-br)">
                            <th className="py-3 text-sm text-left"><span>User Details</span></th>
                            <th className="py-3 text-sm text-left"><span>Email Address</span></th>
                            <th className="py-3 text-sm text-left"><span>Role Type</span></th>
                            <th className="py-3 text-sm text-left"><span>Status</span></th>
                            <th className="py-3 text-sm text-right"><span>Actions</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <UserRow
                                key={user.id}
                                user={user}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                            />
                        ))}
                    </tbody>
                </table>
            </Card>
        </FlexCol >

    );
}

export default UsersListPage;
