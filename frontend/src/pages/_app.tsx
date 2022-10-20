import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "./chakra/theme"
import { ApolloProvider } from "@apollo/client/react"
import { client } from "../graphql/apollo-client"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
    </ApolloProvider>
  )
}

export default MyApp

