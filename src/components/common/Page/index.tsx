import Head from "next/head"
import * as React from "react"
import {Center, Loader} from "@mantine/core";

interface Props {
    children: React.ReactNode
    title: string
    loading?: boolean
}

export const Page = ({children, title, loading}: Props) => {
    return (
        <>
            <Head>
                <title>{title + " - VOIP+"}</title>
            </Head>
            {!loading ? (
                children
            ) : (
                <Center py={"xl"}>
                    <Loader size={"md"}/>
                </Center>
            )}
        </>
    )
}
