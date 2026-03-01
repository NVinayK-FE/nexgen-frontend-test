import { Role, ROLES } from "@/data/roles";
import { getAllDummyProperties, IProperty } from "@/data/property";

export interface IUser {
    userId: string | null;
    name: string;
    role: Role;
    isAuthenticated: boolean;
    selectedProperty: IProperty | null;
    selectedProperties: IProperty[];
};

export const getDefaultUser = (): IUser => ({
    userId: null,
    name: '',
    role: ROLES.MASTER_ADMIN,
    isAuthenticated: true,
    selectedProperty: null,
    selectedProperties: getAllDummyProperties(),
});

export type UserStatus = 'Active' | 'Inactive' | 'Pending';

export interface UserRow {
    id: string;
    name: string;
    initials: string;
    avatarColor: string;
    email: string;
    role: Role;
    status: UserStatus;
    joinedDate: string;
}

export interface StatsProps {
    totalUsers: number;
    activeNow: number;
    pendingInvites: number;
}

export interface UserRowProps {
    user: UserRow;
    onEdit: (user: UserRow) => void;
    onDelete: (user: UserRow) => void;
}

export const mockUsers: UserRow[] = [
    {
        id: "1",
        name: "Alex Rivera",
        initials: "AR",
        avatarColor: "linear-gradient(135deg,#3B82F6,#1D4ED8)",
        email: "alex.r@nexgen.com",
        role: ROLES.HOTEL_ADMIN,
        status: "Active",
        joinedDate: "Joined 2 days ago"
    },
    {
        id: "2",
        name: "Sarah Chen",
        initials: "SC",
        avatarColor: "linear-gradient(135deg,#6366F1,#4338CA)",
        email: "s.chen@nexgen.com",
        role: ROLES.SUPER_ADMIN,
        status: "Active",
        joinedDate: "Joined Oct 12, 2026"
    },
    {
        id: "3",
        name: "Marcus Wright",
        initials: "MW",
        avatarColor: "linear-gradient(135deg,#475569,#334155)",
        email: "m.wright@nexgen.com",
        role: ROLES.HOTEL_GUEST,
        status: "Inactive",
        joinedDate: "Joined Sep 30, 2026"
    },
    {
        id: "4",
        name: "Jordan Smyth",
        initials: "JS",
        avatarColor: "linear-gradient(135deg,#475569,#334155)",
        email: "j.smyth@nexgen.com",
        role: ROLES.HOTEL_GUEST,
        status: "Pending",
        joinedDate: "Pending Invitation"
    }
];
