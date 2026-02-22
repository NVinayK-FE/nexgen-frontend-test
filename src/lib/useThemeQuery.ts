import { useQuery } from "@tanstack/react-query";

export interface ThemeFile {
    name: string;
    colors: Record<string, string>;
}

export const useThemeQuery = (themeFile: string) => {
    return useQuery<ThemeFile>({
        queryKey: ["theme", themeFile],
        queryFn: async () => {
            const response = await fetch(`/theme/theme-${themeFile}.json`);
            if (!response.ok) {
                throw new Error(`Failed to fetch theme file: ${themeFile}`);
            }
            return response.json();
        },
        staleTime: Infinity,
    });
};
