import { Palette } from "lucide-react";

const ThemeSettingsPage = () => {
    return <div className="theme-card max-w-2xl">
        <div className="flex items-start gap-4 mb-8">
            <div className="theme-layer-primary-hover w-12 h-12 rounded-lg flex items-center justify-center">
                <Palette className="w-6 h-6" />
            </div>
            <div>
                <h3 className="theme-layer-primary text-xl font-bold mb-1">Theme Settings</h3>
                <p className="text-sm">Customize the appearance of your account by updating your theme settings.</p>
            </div>
        </div>

    </div>
};

export default ThemeSettingsPage;
