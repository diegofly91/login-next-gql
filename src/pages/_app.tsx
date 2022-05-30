import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { ApolloProvider } from "@apollo/client";
import client from "@/utils/apollo/apolloClient";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "@/styles/theme";
import { Provider as ProvideRedux } from "react-redux";
import { store, persistor } from "@/contexts/context.redux";
import createEmotionCache from "@/utils/createEmotionCache";
import "@/styles/global.scss";
import { PersistGate } from "redux-persist/integration/react";
import PageChange from "@/components/pageChange/PageChange";
import { UserProvider } from "@/contexts/context.react";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url: string) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <>
      <ProvideRedux store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApolloProvider client={client}>
            <Head>
              <meta
                name="viewport"
                content="initial-scale=1, width=device-width"
              />
            </Head>
            <UserProvider>
              <CacheProvider value={emotionCache}>
                <ThemeProvider theme={theme}>
                  {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                  <CssBaseline />
                  {loading && <PageChange />}
                  <Component {...pageProps} />
                </ThemeProvider>
              </CacheProvider>
            </UserProvider>
          </ApolloProvider>
        </PersistGate>
      </ProvideRedux>
    </>
  );
}
