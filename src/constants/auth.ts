export const ROLES = {
    MASTER_ADMIN: "master-admin",
    SUPER_ADMIN: "super-admin",
    ADMIN: "admin",
    USER: "user",
    GUEST: "guest",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];
