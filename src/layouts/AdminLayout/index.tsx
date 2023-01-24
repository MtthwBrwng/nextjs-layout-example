import React from "react";

interface Props {
    children: React.ReactNode
}

export const AdminLayout = ({children}: Props) => {
    return (
        <div>
            <header>Admin Header</header>
            <main>{children}</main>
            <footer>Admin Footer</footer>
        </div>
    )
}

export default AdminLayout