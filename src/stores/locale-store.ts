import { create } from "zustand";

interface ILocaleState {
    locale: string;
    setLocale: (locale: string) => void;
}

export const useLocaleStore = create<ILocaleState>((set) => ({
    locale: "en",
    setLocale: (locale) => set({ locale }),
}));
