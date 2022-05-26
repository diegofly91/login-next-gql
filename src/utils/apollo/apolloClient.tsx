import { ApolloClient, HttpLink } from "@apollo/client";
import cache from "./apolloCache";
import errorLink from "./apolloError";
import authLink from "./apolloAuth";

const link = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
  credentials: "same-origin",
});

const client = new ApolloClient({
  connectToDevTools: true,
  link: errorLink.concat(authLink.concat(link)),
  cache,
  ssrForceFetchDelay: 100,
  credentials: "same-origin",
});

export default client;
