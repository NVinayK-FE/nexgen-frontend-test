import { create } from "zustand";

interface ThemeState {
    currentTheme: string;
    applyTheme: (name: string, colors: Record<string, string>) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
    currentTheme: "dark",
    applyTheme: (name, colors) => {
        const html = document.documentElement;
        Object.keys(colors).forEach((key) => {
            html.style.setProperty(`--${key}`, colors[key]);
        });
        set(() => ({
            currentTheme: name,
        }));
    },
}));
