import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ROUTES } from "@/constants/route";

export const goToPage = (router: AppRouterInstance, url: string) => {
    router.push(url);
}

export const goToDashboard = (router: AppRouterInstance) => {
    router.push(ROUTES.DASHBOARD);
}

export const goToSignIn = (router: AppRouterInstance) => {
    router.push(ROUTES.SIGN_IN);
}

export const goToChangePassword = (router: AppRouterInstance) => {
    router.push(ROUTES.CHANGE_PASSWORD);
}

export const goToChangeEmail = (router: AppRouterInstance) => {
    router.push(ROUTES.CHANGE_EMAIL);
}
