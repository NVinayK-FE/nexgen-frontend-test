export const API_CONFIG = {
    BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
    TIMEOUT: 30000,
    RETRY_ATTEMPTS: 3,
} as const;

export enum API_ENDPOINTS {
    LOGIN = '/api/auth/login',
    LOGOUT = '/api/auth/logout',
    REFRESH_TOKEN = '/api/auth/refresh',
    GET_USERS = '/api/users',
    CREATE_USER = '/api/users',
    STATUS = '/api/auth/status',
}
