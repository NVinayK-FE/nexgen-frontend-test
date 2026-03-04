
"use client";



import { Palette } from "lucide-react";
import { useThemeStore } from "@/stores/theme-store";
import { useThemeQuery } from "@/services/theme-service";
import { useState } from "react";
import ColorPickerPopover from "@shared/ColorPickerPopover";
import Button from "@/components/shared/core/ui/button";

const themes = [
    { name: "dark", label: "Dark" },
    { name: "light", label: "Light" },
    { name: "custom", label: "Custom" },
];

const themeProperties = [
    { key: "--color-base", label: "Base Background" },
    { key: "--color-base-secondary", label: "Base Secondary" },
    { key: "--color-base-tertiary", label: "Base Tertiary" },
    { key: "--color-layer", label: "Layer Background" },
    { key: "--color-layer-tertiary", label: "Layer Tertiary" },
    { key: "--color-layer-placeholder", label: "Layer Placeholder" },
    { key: "--color-layer-primary", label: "Layer Primary" },
    { key: "--color-layer-primary-hover", label: "Layer Primary Hover" },
    { key: "--color-layer-primary-active", label: "Layer Primary Active" },
    { key: "--color-layer-secondary", label: "Layer Secondary" },
    { key: "--color-layer-secondary-hover", label: "Layer Secondary Hover" },
    { key: "--color-layer-secondary-active", label: "Layer Secondary Active" },
    { key: "--color-border-tertiary", label: "Border Tertiary" },
];

const ThemeSettingsPage = () => {
    const { currentTheme, applyTheme } = useThemeStore();
    const [selectedTheme, setSelectedTheme] = useState(currentTheme);
    const { data: themeData } = useThemeQuery(selectedTheme);
    const [customColors, setCustomColors] = useState<Record<string, string>>({});
    const [editing, setEditing] = useState(false);

    const themeColors = selectedTheme === "custom"
        ? customColors
        : themeData?.colors || {};

    const handleColorChange = (key: string, value: string) => {
        setCustomColors((prev) => ({ ...prev, [key]: value }));
        if (typeof document !== "undefined") {
            document.documentElement.style.setProperty(key, value);
        }
    };

    const handleApply = () => {
        applyTheme(selectedTheme, themeColors);
        setEditing(false);
    };

    const handleThemeSelect = (name: string) => {
        setSelectedTheme(name);
        setEditing(false);
        if (name !== "custom" && themeData?.colors) {
            setCustomColors(themeData.colors);
        } else {
            setCustomColors({});
        }
    };

    return (
        <div className="theme-card max-w-2xl">
            <div className="flex items-start gap-4 mb-8">
                <div className="theme-layer-primary-hover w-12 h-12 rounded-lg flex items-center justify-center">
                    <Palette className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="theme-layer-primary text-xl font-bold mb-1">Theme Settings</h3>
                    <p className="text-sm">Customize the appearance of your account by updating your theme settings.</p>
                </div>
            </div>

            <form onSubmit={e => { e.preventDefault(); handleApply(); }}>
                {/* <fieldset className="mb-6">
                    <legend className="block mb-2 font-semibold">Select Theme:</legend>
                    <div className="flex gap-4">
                        {themes.map((theme) => (
                            <label key={theme.name} className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="theme"
                                    value={theme.name}
                                    checked={selectedTheme === theme.name}
                                    onChange={() => handleThemeSelect(theme.name)}
                                />
                                {theme.label}
                            </label>
                        ))}
                    </div>
                </fieldset> */}

                <div className="mb-6">
                    <label className="block mb-2 font-semibold">Theme Properties:</label>
                    <div className="flex flex-col gap-2">
                        {themeProperties.map(({ key, label }) => {
                            let rootValue = "#000000";
                            if (typeof document !== "undefined") {
                                const val = getComputedStyle(document.documentElement).getPropertyValue(key);
                                if (val && val.trim().length > 0) {
                                    rootValue = val.trim();
                                }
                            }
                            return (
                                <div key={key} className="flex flex-row theme-layer-border gap-2 p-2 justify-between">
                                    <span className="text-sm font-medium mb-1">{label}</span>
                                    <ColorPickerPopover
                                        color={customColors[key] || rootValue}
                                        onChange={value => handleColorChange(key, value)}
                                        barColor={customColors[key] || rootValue}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="theme-layer-divider my-6" />

                <div className="flex flex-row justify-between items-center gap-2 mb-4">
                    <span className="text-sm theme-layer-tertiary">Preview changes in real-time as you customize your theme.</span>
                    <Button
                        label="Save Theme"
                        onClick={handleApply}
                        buttonVariant="active"
                    />
                </div>


            </form>
        </div>
    );
};

export default ThemeSettingsPage;
