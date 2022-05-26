import React from "react";
import Router from "next/router";
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
import { createRoot } from "react-dom/client";
import { UserProvider } from "@/contexts/context.react";

Router.events.on("routeChangeStart", (url) => {
  const root = createRoot(document.getElementById("page-transition")!);
  root.render(<PageChange />);
});

Router.events.on("routeChangeComplete", () => {
  const root = createRoot(document.getElementById("page-transition")!);
  root.unmount();
  document.body.classList.remove("body-page-transition");
});

Router.events.on("routeChangeError", () => {
  const root = createRoot(document.getElementById("page-transition")!);
  root.unmount();
  document.body.classList.remove("body-page-transition");
});
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <ProvideRedux store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <CacheProvider value={emotionCache}>
            <Head>
              <meta
                name="viewport"
                content="initial-scale=1, width=device-width"
              />
            </Head>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <UserProvider>
                <Component {...pageProps} />
              </UserProvider>
            </ThemeProvider>
          </CacheProvider>
        </ApolloProvider>
      </PersistGate>
    </ProvideRedux>
  );
}
