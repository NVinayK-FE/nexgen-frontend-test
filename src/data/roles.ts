import { ISelectItem } from "@core/radix-ui/react-select";
import { LucideIcon, UserStar } from "lucide-react";

export const ROLES = {
    MASTER_ADMIN: "master-admin",
    SUPER_ADMIN: "super-admin",
    HOTEL_ADMIN: "hotel-admin",
    HOTEL_STAFF: "hotel-staff",
    HOTEL_GUEST: "hotel-guest",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export const ROLE_LABELS: Record<Role, string> = {
    [ROLES.MASTER_ADMIN]: "Master Admin, [Full Access to All Properties]",
    [ROLES.SUPER_ADMIN]: "Super Admin [Full Access to Chain of Properties]",
    [ROLES.HOTEL_ADMIN]: "Hotel Admin",
    [ROLES.HOTEL_STAFF]: "Hotel Staff",
    [ROLES.HOTEL_GUEST]: "Hotel Guest",
};

export const getRoleSelectItems: ISelectItem[] = Object.values(ROLES).map((role) => ({
    value: role,
    label: ROLE_LABELS[role],
}));

export interface RoleRow {
    id: string;
    name: string;
    icon: LucideIcon;
    iconColor: string;
    iconBg: string;
    usersCount: number;
    lastUpdated: string;
}

export interface RoleRowProps {
    role: RoleRow;
    onEdit: (roleName: string) => void;
}

export const ROLE_COLORS = {
    SUPER_ADMIN: {
        bg: "rgba(59,130,246,0.12)",
        border: "rgba(59,130,246,0.2)",
        stroke: "#60A5FA"
    },
    HOTEL_ADMIN: {
        bg: "rgba(245,158,11,0.1)",
        border: "rgba(245,158,11,0.2)",
        stroke: "#FBBF24"
    },
    HOTEL_STAFF: {
        bg: "rgba(16,185,129,0.1)",
        border: "rgba(16,185,129,0.2)",
        stroke: "#34D399"
    }
} as const;

export const mockRoles: RoleRow[] = [
    {
        id: "1",
        name: "Super Admin",
        icon: UserStar,
        iconColor: ROLE_COLORS.SUPER_ADMIN.stroke,
        iconBg: ROLE_COLORS.SUPER_ADMIN.bg,
        usersCount: 12,
        lastUpdated: "Oct 24, 2025"
    },
    {
        id: "2",
        name: "Hotel Admin",
        icon: UserStar,
        iconColor: ROLE_COLORS.HOTEL_ADMIN.stroke,
        iconBg: ROLE_COLORS.HOTEL_ADMIN.bg,
        usersCount: 45,
        lastUpdated: "Oct 20, 2025"
    },
    {
        id: "3",
        name: "Hotel Staff",
        icon: UserStar,
        iconColor: ROLE_COLORS.HOTEL_STAFF.stroke,
        iconBg: ROLE_COLORS.HOTEL_STAFF.bg,
        usersCount: 128,
        lastUpdated: "Sep 15, 2025"
    }
];
