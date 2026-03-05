
"use client";

import { Palette } from "lucide-react";
import { useThemeStore } from "@/stores/theme-store";
import { useThemeQuery } from "@/services/theme-service";
import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import ColorPickerPopover from "@shared/ColorPickerPopover";
import Button from "@/components/shared/core/ui/button";
import { group } from "console";

const themes = [
    { name: "dark", label: "Dark" },
    { name: "light", label: "Light" },
    { name: "custom", label: "Custom" },
];

const themeProperties = [
    { key: "--color-base", group: "page", label: "Page background color" },
    { key: "--color-base-secondary", group: "page", label: "Page foreground primary color" },
    { key: "--color-base-tertiary", group: "page", label: "Page foreground secondary color" },
    { key: "--color-layer", group: "card", label: "Card background color" },
    { key: "--color-layer-tertiary", group: "card", label: "Card foreground secondary color" },
    { key: "--color-layer-placeholder", group: "card", label: "Card foreground placeholder color" },
    { key: "--color-layer-primary", group: "card", label: "Card primary color" },
    { key: "--color-layer-primary-hover", group: "card", label: "Card primary hover color" },
    { key: "--color-layer-primary-active", group: "card", label: "Card primary active color" },
    { key: "--color-layer-secondary", group: "card", label: "Card secondary color" },
    { key: "--color-layer-secondary-hover", group: "card", label: "Card secondary hover color" },
    { key: "--color-layer-secondary-active", group: "card", label: "Card secondary active color" },
    { key: "--color-border-tertiary", group: "card", label: "Border tertiary color" },
];

const darkThemeColors = {
    "--color-base": "#020617",
    "--color-base-secondary": "#ededed",
    "--color-base-tertiary": "#475569",
    "--color-layer": "#1E293B",
    "--color-layer-tertiary": "#54647c",
    "--color-layer-placeholder": "#404b5b",
    "--color-layer-primary": "#94a3b8",
    "--color-layer-primary-hover": "#3b82f614",
    "--color-layer-primary-active": "#3b82f659",
    "--color-layer-secondary": "#6484b2",
    "--color-layer-secondary-hover": "#28529714",
    "--color-layer-secondary-active": "#3b82f61f",
    "--color-border-tertiary": "#3b82f614",
}

const lightThemeColors =
{
    "--color-base": "#dacaca",
    "--color-base-secondary": "#0f172a", /* Stronger contrast for text */
    "--color-base-tertiary": "#475569",
    "--color-layer": "#706a5e",          /* Slightly darker than white, provides depth */
    "--color-layer-tertiary": "#cbd5e1", /* Clearer borders */
    "--color-layer-placeholder": "#94a3b8",
    "--color-layer-primary": "#e98a73",       /* Richer, deeper blue */
    "--color-layer-primary-hover": "#eff6ff",
    "--color-layer-primary-active": "#3f4142",
    "--color-layer-secondary": "#e2e8f0",
    "--color-layer-secondary-hover": "#cbd5e1",
    "--color-layer-secondary-active": "#94a3b8",
    "--color-border-tertiary": "#6a747d",
};

const customThemeColors = {
    "--color-base": "#ac7ccd",           /* Deep purple background */
    "--color-base-secondary": "#f3e8ff", /* Soft lavender text */
    "--color-base-tertiary": "#f3bbff",  /* Vibrant purple accents */
    "--color-layer": "#6b21a8",          /* Light lavender surface */
    "--color-layer-tertiary": "#d8b4fe", /* Muted purple borders */
    "--color-layer-placeholder": "#a855f7",
    "--color-layer-primary": "#4c1883",
    "--color-layer-primary-hover": "#7c3aed14",
    "--color-layer-primary-active": "#c113f1",
    "--color-layer-secondary": "#ede9fe",
    "--color-layer-secondary-hover": "#ddd6fe",
    "--color-layer-secondary-active": "#c4b5fd",
    "--color-border-tertiary": "#6453ac",
}

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
        let colors: Record<string, string> = {};
        if (name === "dark") colors = darkThemeColors;
        else if (name === "light") colors = lightThemeColors;
        else if (name === "custom") colors = { ...customThemeColors };
        // Set all themeProperties keys, fallback to default if missing
        if (typeof document !== "undefined") {
            themeProperties.forEach(({ key }) => {
                const value = colors[key] || "";
                document.documentElement.style.setProperty(key, value);
            });
        }
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
                    <h3 className="theme-layer-secondary text-xl font-bold mb-1">Theme Settings</h3>
                    <p>Customize the appearance of your account by updating your theme settings.</p>
                </div>
            </div>

            <form onSubmit={e => { e.preventDefault(); handleApply(); }}>
                <fieldset className="mb-6">
                    <legend className="block mb-2 font-semibold">Select Theme:</legend>
                    <div className="flex gap-4">
                        {themes.map((theme) => {
                            let color = "#000";
                            if (theme.name === "dark") color = darkThemeColors["--color-base"];
                            else if (theme.name === "light") color = lightThemeColors["--color-base"];
                            else if (theme.name === "custom") color = customThemeColors["--color-base-tertiary"];
                            return (
                                <label key={theme.name} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="theme"
                                        value={theme.name}
                                        checked={selectedTheme === theme.name}
                                        onChange={() => handleThemeSelect(theme.name)}
                                    />
                                    <span className="flex items-center gap-1">
                                        {/* <span style={{ background: color, width: 18, height: 18, borderRadius: "50%", border: "1px solid #ccc", display: "inline-block" }} /> */}
                                        {theme.label}
                                    </span>
                                </label>
                            );
                        })}
                    </div>
                </fieldset>

                <div className="mb-6">
                    <label className="block mb-2 font-semibold">Theme Properties:</label>
                    <Tabs.Root defaultValue="page">
                        <Tabs.List className="flex gap-2 border-b border-(--color-border-tertiary) mb-4">
                            <Tabs.Trigger value="page" className="cursor-pointer px-4 py-2 font-semibold border-b-2 transition-colors data-[state=active]:border-(--color-layer-primary-active) data-[state=active]:theme-layer-secondary border-transparent">Page</Tabs.Trigger>
                            <Tabs.Trigger value="card" className="cursor-pointer px-4 py-2 font-semibold border-b-2 transition-colors data-[state=active]:border-(--color-layer-primary-active) data-[state=active]:theme-layer-secondary border-transparent">Card</Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content value="page">
                            <div className="flex flex-col gap-2">
                                {themeProperties.filter(tp => tp.group === "page").map(({ key, label }) => {
                                    let rootValue = "#000000";
                                    if (typeof document !== "undefined") {
                                        const val = getComputedStyle(document.documentElement).getPropertyValue(key);
                                        if (val && val.trim().length > 0) {
                                            rootValue = val.trim();
                                        }
                                    }
                                    return (
                                        <div key={key} className="flex flex-row gap-2 p-2 justify-between">
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
                        </Tabs.Content>
                        <Tabs.Content value="card">
                            <div className="flex flex-col gap-2">
                                {themeProperties.filter(tp => tp.group === "card").map(({ key, label }) => {
                                    let rootValue = "#000000";
                                    if (typeof document !== "undefined") {
                                        const val = getComputedStyle(document.documentElement).getPropertyValue(key);
                                        if (val && val.trim().length > 0) {
                                            rootValue = val.trim();
                                        }
                                    }
                                    return (
                                        <div key={key} className="flex flex-row gap-2 p-2 justify-between">
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
                        </Tabs.Content>
                    </Tabs.Root>
                </div>

                <div className="theme-layer-divider my-6" />

                <div className="flex flex-row justify-between items-center gap-2 mb-4">
                    <Button
                        label="Reset to Defaults"
                        onClick={() => {
                            handleThemeSelect(selectedTheme);
                        }}
                        buttonVariant="ghost"
                    />
                    <div className="flex flex-row gap-2">
                        <Button
                            label="Save to Current Theme"
                            onClick={() => handleThemeSelect(currentTheme)}
                            buttonVariant="outline"
                        />
                        <Button
                            label="Save As New Theme"
                            onClick={handleApply}
                            buttonVariant="active"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ThemeSettingsPage;
