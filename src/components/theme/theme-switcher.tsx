"use client";

import { useEffect, useState } from "react";
import { useThemeQuery } from "@/lib/useThemeQuery";
import { useThemeStore } from "@/stores/useThemeStore";

interface ThemeSwitcherProps {
    themeFile: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ themeFile }) => {
    const { data, error } = useThemeQuery(themeFile);
    const applyTheme = useThemeStore((state) => state.applyTheme);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (data) {
            applyTheme(data.name, data.colors);
            setLoading(false);
        }

        if (error) {
            console.error("Error loading theme:", error);
            setLoading(false);
        }
    }, [data, error, applyTheme]);

    if (loading) {
        return <div>Loading theme...</div>;
    }

    return null; // This component doesn't render anything visible

};
