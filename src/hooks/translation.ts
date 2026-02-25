"use client"

import { useLocaleQuery } from "@/services/locale-service";
import { useLocaleStore } from "@/stores/locale-store";

export const useTranslation = (namespace: string) => {
    const currentLocale = useLocaleStore();
    const { data, isLoading } = useLocaleQuery(currentLocale.locale);

    if (isLoading) {
        return { t: {}, isLoading: true };
    }

    if (!data) {
        console.warn(`No locale data found for locale: ${currentLocale.locale}`);
        return { t: {}, isLoading: false };
    }

    return { t: data[namespace] || {}, isLoading: false };
}
