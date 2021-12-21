import * as React from 'react'
import {NextPage} from "next";
import {About, Hero, Publications} from "../components/";
import Head from 'next/head';

const App: NextPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Shruti Turner</title>
                <meta name="description" content="Shruti Turner"/>
            </Head>
            <main>
                <Hero/>
                <About/>
                <Publications/>
            </main>
        </React.Fragment>
    )
}

export default App