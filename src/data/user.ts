import { Role, ROLES } from "@/data/roles";
import { getAllDummyProperties, IProperty } from "@/data/property";

export interface IUser {
    userId: string | null;
    role: Role;
    isAuthenticated: boolean;
    selectedProperty: IProperty | null;
    selectedProperties: IProperty[];
}

export const getDefaultUser = (): IUser => ({
    userId: null,
    role: ROLES.HOTEL_GUEST,
    isAuthenticated: false,
    selectedProperty: null,
    selectedProperties: getAllDummyProperties(),
})
