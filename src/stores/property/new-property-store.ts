import { getDefaultProperty, IProperty } from "@/data/property";
import { create } from "zustand";

interface INewPropertyState {
    property: IProperty,
    setProperty: (property: IProperty) => void;
    resetProperty: () => void;
}

export const useNewPropertyStore = create<INewPropertyState>((set) => ({
    property: getDefaultProperty(),
    setProperty: (property) =>
        set({
            property: {
                ...property,
            },
        }),
    resetProperty: () =>
        set({
            property: getDefaultProperty(),
        }),
}));
