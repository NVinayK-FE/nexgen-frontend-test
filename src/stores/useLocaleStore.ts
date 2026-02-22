import { create } from "zustand";

interface LocaleState {
    locale: string;
    setLocale: (locale: string) => void;
}

export const useLocaleStore = create<LocaleState>((set) => ({
    locale: "es",
    setLocale: (locale) => set({ locale }),
}));
