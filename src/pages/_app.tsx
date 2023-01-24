import type {AppProps} from 'next/app'
import React from "react";

const App = ({Component, pageProps}: AppProps) => {
    // @ts-ignore
    const Layout = Component.Layout ? Component.Layout : React.Fragment;

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default App