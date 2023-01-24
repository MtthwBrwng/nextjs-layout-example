import AdminLayout from "@/layouts/AdminLayout";
import NextLink from "next/link";

const AdminPage = () => {
    return (
        <div>
            <p>Admin Page</p>
            <NextLink href={"/"}>Go to Home</NextLink>
        </div>
    )
}

AdminPage.Layout = AdminLayout

export default AdminPage