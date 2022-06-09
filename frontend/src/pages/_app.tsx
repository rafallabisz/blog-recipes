import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { createEmotionCache } from "@/styles/createEmotionCache";
import "@/styles/bootstrap.min.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
};

export default MyApp;
