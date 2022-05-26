import { InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getDayDateByTypeFestive: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
  addTypename: false,
});

export default cache;
