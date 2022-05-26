import { setContext } from "@apollo/client/link/context";

const authLink = setContext(async (_, { headers }) => {
  if (typeof window !== undefined) {
    const token = await localStorage.getItem("token");
    return {
      headers: {
        ...headers,
        authorization: token ? `${token}` : "",
      },
    };
  }
});

export default authLink;
