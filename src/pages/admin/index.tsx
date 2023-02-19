import AdminLayout from "@/layouts/AdminLayout";
import NextLink from "next/link";

const AdminOverviewPage = () => {
    return (
        <div>
            <p>Admin Page</p>
            <NextLink href={"/"}>Go to Home</NextLink>
        </div>
    )
}

AdminOverviewPage.Layout = AdminLayout

export default AdminOverviewPage