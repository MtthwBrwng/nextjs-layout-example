import React from "react";
import {AppShell, Group, Header, Navbar, Text} from "@mantine/core";

interface Props {
    children: React.ReactNode
}

export const AdminLayout = ({children}: Props) => {
    return (
        <AppShell padding={"md"} header={<AdminHeader/>}>
            {children}
        </AppShell>
    )
}

const AdminHeader = () => {
    return (
        <Header height={72} p={"md"}>
            <Group align={"center"} position={"apart"} sx={{height: "100%"}}>
                <Text size={"xl"} weight={800}>Audian</Text>
                <Group></Group>
            </Group>
        </Header>
    )
}

export default AdminLayout