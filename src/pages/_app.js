import {ApolloProvider} from "@apollo/client"
import {useApollo } from "../lib/apolloClient";
import {CountContextProvider} from "../context/CountContext"

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return(<ApolloProvider client={apolloClient} >
    <CountContextProvider>
            <Component {...pageProps} />
    </CountContextProvider>
        </ApolloProvider>)
}

export default MyApp
