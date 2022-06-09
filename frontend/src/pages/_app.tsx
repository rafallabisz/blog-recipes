import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { CacheProvider, EmotionCache } from '@emotion/react';
import { createEmotionCache } from '@/styles/createEmotionCache';
import { useRouter } from 'next/router';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}


const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();

  return (
    <CacheProvider value={emotionCache}>
            <Component {...pageProps} />
    </CacheProvider>
  );
};

export default MyApp;