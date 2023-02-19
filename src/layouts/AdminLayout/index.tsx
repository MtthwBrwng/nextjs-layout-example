import React from "react";
import {AppShell, Group, Header, Navbar, Text} from "@mantine/core";

interface Props {
    children: React.ReactNode
}

export const AdminLayout = ({children}: Props) => {
    return (
        <AppShell padding="md" navbar={<AdminNavbar/>} header={<AdminHeader/>}>
            {children}
        </AppShell>
    )
}

const AdminNavbar = () => {
    return (
        <Header height={72} p={"md"}>
            <Group align={"center"} position={"apart"} sx={{height: "100%"}}>
                <Text size={"xl"} weight={800}>VOIP+</Text>
                <Group></Group>
            </Group>
        </Header>
    )
}
const AdminHeader = () => {
    return (
        <Navbar width={{base: 225}} height={500} p="xs">{/* Navbar content */}</Navbar>
    )
}


export default AdminLayout