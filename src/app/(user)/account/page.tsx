import { ROUTES } from "@/data/route";
import { redirect } from "next/navigation"

const AccountPage = () => {
    redirect(ROUTES.CHANGE_PASSWORD);
}

export default AccountPage;
