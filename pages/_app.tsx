import * as React from "react";
import {FC, Fragment} from "react";
import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {ChakraProvider, CSSReset} from "@chakra-ui/react";
import {css, Global} from "@emotion/react";
import {Footer} from "../components";

const GlobalStyles: FC = ({ children }) => (
    <Fragment>
        <CSSReset />
        <Global
            styles={css`
        html {
          min-width: 360px;
          scroll-behavior: smooth;
        }

        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}
        />
        {children}
    </Fragment>
);

function MyApp({Component, pageProps}: AppProps) {
    return <ChakraProvider>
        <GlobalStyles />
        <Component {...pageProps} />
        <Footer/>
    </ChakraProvider>
}

export default MyApp
