import { redirect } from "next/navigation"

const AccountSettingsPage = () => {
    redirect("/account/settings/change-password")
}

export default AccountSettingsPage;
