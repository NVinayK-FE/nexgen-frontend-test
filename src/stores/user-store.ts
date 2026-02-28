import { getDefaultUser, IUser } from "@/data/user";
import { create } from "zustand";

interface IUserState {
    user: IUser,
    setUser: (user: IUser) => void;
    resetUser: () => void;
}

export const useUserStore = create<IUserState>((set) => ({
    user: getDefaultUser(),
    setUser: (user) =>
        set({
            user: {
                ...user,
                isAuthenticated: true,
            },
        }),
    resetUser: () =>
        set({
            user: getDefaultUser(),
        }),
}));
