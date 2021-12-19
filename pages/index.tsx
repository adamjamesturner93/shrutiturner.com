import * as React from 'react'
import {NextPage} from "next";
import {About, Hero, Publications} from "../components";

const App: NextPage = () => {
    return (
            <main>
                <Hero/>
                <About/>
                <Publications/>
            </main>
    )
}

export default App