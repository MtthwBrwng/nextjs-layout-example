import React from "react";
import {AppShell, Group, Header, Text} from "@mantine/core";

interface Props {
    children: React.ReactNode
}

export const DefaultLayout = ({children}: Props) => {
    return (
        <AppShell padding={"lg"} header={<DefaultHeader/>}>
            {children}
        </AppShell>
    )
}

const DefaultHeader = () => {
    return (
        <Header height={72} p={"md"}>
            <Group align={"center"} position={"apart"} sx={{height: "100%"}}>
                <Text size={"xl"} weight={800}>Audian</Text>
            </Group>
        </Header>
    )
}

export default DefaultLayout