import DefaultLayout from "@/layouts/DefaultLayout";
import NextLink from "next/link"

const HomePage = () => {
    return (
        <div>
            <p>Home Page</p>
            <NextLink href={"/admin"}>Go to Admin</NextLink>
        </div>
    )
}

HomePage.Layout = DefaultLayout

export default HomePage