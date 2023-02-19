import * as React from "react"
import {useEffect} from "react"
import DefaultLayout from "@/layouts/DefaultLayout";
import {Page} from "@/components/common/Page";
import {useRouter} from "next/router";
import {Auth} from "@aws-amplify/auth";
import {Container, Paper, Title} from "@mantine/core";

const RegisterPage = () => {
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
        <Page title={"Register"}>
            <Container size={400} my={50}>
                <Title order={2} align={"center"} py={"sm"}>Register Account</Title>
                <Paper p={"sm"} radius={"md"} withBorder>
                    Register
                </Paper>
            </Container>
        </Page>
    )
}

RegisterPage.Layout = DefaultLayout

export default RegisterPage