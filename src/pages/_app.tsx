import type {AppProps} from 'next/app'
import React, {useState} from "react";
import {MantineProvider} from "@mantine/core";
import {Hydrate, QueryClient, QueryClientProvider} from "@tanstack/react-query";

const App = ({Component, pageProps}: AppProps) => {
    const [queryClient] = useState(() => new QueryClient());

    // @ts-ignore
    const Layout = Component.Layout ? Component.Layout : React.Fragment;

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <MantineProvider withNormalizeCSS>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </MantineProvider>
            </Hydrate>
        </QueryClientProvider>
    )
}

export default App