import { ISelectItem } from "@core/radix-ui/react-select";

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
