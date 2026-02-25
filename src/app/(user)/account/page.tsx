import { ROUTES } from "@/constants/route";
import { redirect } from "next/navigation"

const AccountPage = () => {
    redirect(ROUTES.CHANGE_PASSWORD);
}

export default AccountPage;
