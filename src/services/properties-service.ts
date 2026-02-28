import { IProperty } from "@/data/property";
import { API_ENDPOINTS } from "@/utils/api-endpoint";
import axios from "axios";

interface IPropertiesResponse {
    properties: IProperty[];
}

export const getProperties = async (): Promise<IPropertiesResponse> => {
    try {
        const response = await axios.get<IPropertiesResponse>(API_ENDPOINTS.PROPERTIES, {
            withCredentials: true,
        });
        const data: IPropertiesResponse = response.data;
        if (data) {
            return data;
        }
        return { properties: [] };
    } catch (error) {
        throw new Error("Failed to fetch properties");
    }
}
