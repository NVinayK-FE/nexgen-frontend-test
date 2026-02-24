import { getAuthenticated } from "@/services/auth/auth-client.service";
import { useQuery } from "@tanstack/react-query";

export const useAuthStatus = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['auth', 'status'],
        queryFn: getAuthenticated,
    });

    return {
        isAuthenticated: data?.isAuthenticated ?? false,
        isLoading,
        user: data?.userId ? { userId: data.userId } : null,
    };
};