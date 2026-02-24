import { ROUTES } from "@/utils/auth/routes/routes";
import { redirect } from "next/navigation"

const AccountPage = () => {
    redirect(ROUTES.CHANGE_PASSWORD);
}

export default AccountPage;
