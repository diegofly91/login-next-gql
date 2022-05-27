import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

import RootReducer from "./reducers/root.reducers";

const store = configureStore({
  reducer: RootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;

const persistor = persistStore(store);

export { store, persistor };
