import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
}

export default MyApp;
