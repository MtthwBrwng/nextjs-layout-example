import * as React from "react"
import {useEffect} from "react"
import DefaultLayout from "@/layouts/DefaultLayout";
import {Page} from "@/components/common/Page";
import {useRouter} from "next/router";
import {Auth} from "@aws-amplify/auth";
import {Container, Paper, Title} from "@mantine/core";

const LoginPage = () => {
    const router = useRouter()
    const {redirect} = router.query

    useEffect(() => {
        const checkUser = async () => {
            let currentAuthUser = await Auth.currentAuthenticatedUser({bypassCache: true})

            if (currentAuthUser) {
                await router.push(redirect ? redirect as string : "/admin")
            }
        }

        checkUser()
    }, [])

    return (
        <Page title={"Login"}>
            <Container size={400} my={50}>
                <Title order={2} align={"center"} py={"sm"}>Login</Title>
                <Paper p={"sm"} radius={"md"} withBorder>
                    Login
                </Paper>
            </Container>
        </Page>
    )
}

LoginPage.Layout = DefaultLayout

export default LoginPage