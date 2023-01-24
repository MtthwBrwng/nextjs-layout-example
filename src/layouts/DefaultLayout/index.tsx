import React from "react";

interface Props {
    children: React.ReactNode
}

export const DefaultLayout = ({children}: Props) => {
    return (
        <div>
            <header>Header</header>
            <main>{children}</main>
            <footer>Footer</footer>
        </div>
    )
}

export default DefaultLayout