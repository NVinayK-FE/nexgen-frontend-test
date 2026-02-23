import { useQuery } from "@tanstack/react-query";
export interface LocaleData {
    [key: string]: any;
}

export const useLocaleQuery = (locale: string) => {
    return useQuery<LocaleData>({
        queryKey: ["locale", locale],
        queryFn: async () => {
            const response = await fetch(`/locales/${locale}.json`);
            if (!response.ok) {
                throw new Error(`Failed to fetch locale data for: ${locale}`);
            }
            return response.json();
        },
        staleTime: Infinity,
    });
};
