import { IProperty } from "./property";

export const PropertyScope = {
    ALL: "ALL",
    SPECIFIC: "SPECIFIC",
} as const;

export type IPropertyScope = typeof PropertyScope[keyof typeof PropertyScope];

export const PROPERTYSCOPE_LABELS: Record<IPropertyScope, string> = {
    [PropertyScope.ALL]: "All Properties",
    [PropertyScope.SPECIFIC]: "Specific Properties",
};

export interface IPropertyScopeOption {
    value: IPropertyScope;
    label: string;
}

export const propertyScopeOptions: IPropertyScopeOption[] = Object.values(PropertyScope).map((value) => ({
    value,
    label: PROPERTYSCOPE_LABELS[value],
}));

export interface IInviteUserData {
    email: string;
    fullName: string;
    role: string;
    propertyScope: IPropertyScope;
    selectedProperties?: IProperty[];
}

export const getDefaultInviteUserData = (): IInviteUserData => ({
    email: "",
    fullName: "",
    role: "",
    propertyScope: PropertyScope.SPECIFIC,
    selectedProperties: [],
});
