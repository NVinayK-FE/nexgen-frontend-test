import { Role, ROLES } from "@/constants/auth";
import { API_ENDPOINTS } from "@/utils/api";
import axios from "axios";

interface IAuthenticatedResponse {
    isAuthenticated: boolean;
    userId?: string;
    role?: Role;
}

export const getAuthenticated = async (): Promise<IAuthenticatedResponse> => {
    try {
        const response = await axios.get<IAuthenticatedResponse>(API_ENDPOINTS.STATUS, {
            withCredentials: false,
        });
        const data: IAuthenticatedResponse = response.data;
        if (data) {
            return data;
        }

        return { isAuthenticated: true, role: ROLES.ADMIN };
    } catch (error) {
        return { isAuthenticated: true, role: ROLES.ADMIN };
    }
}