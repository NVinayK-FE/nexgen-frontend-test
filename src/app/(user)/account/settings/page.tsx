import { ROUTES } from "@/data/route";
import { redirect } from "next/navigation"

const AccountSettingsPage = () => {
    redirect(ROUTES.PASSWORD_SETTINGS);
}

export default AccountSettingsPage;
