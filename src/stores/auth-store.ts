import { Role, ROLES } from "@/constants/auth";
import { create } from "zustand";

interface AuthState {
    user: string | null;
    role: Role;
    isAuthenticated: boolean;
    setUser: (user: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    role: ROLES.MASTER_ADMIN,
    isAuthenticated: false,

    setUser: (user) =>
        set({
            user,
            role: ROLES.ADMIN,
            isAuthenticated: true,
        }),

    logout: () =>
        set({
            user: null,
            isAuthenticated: false,
        }),
}));
