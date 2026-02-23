"use client"

import { useLocaleQuery } from "@/services/useLocaleQuery";
import { useLocaleStore } from "@/stores/useLocaleStore";

export const useTranslations = (namespace: string) => {
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
