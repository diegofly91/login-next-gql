import { configureStore, AnyAction, Reducer } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { persistStore, PURGE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import RootReducer, { RootState } from "./reducers/root.reducers";

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  switch (action.type) {
    case PURGE:
      localStorage.clear();
      storage.removeItem("persist/root");
      Object.keys(state).forEach((key) => {
        storage.removeItem(`persist:${key}`);
      });

      state = {} as RootState;
      break;
  }
  return RootReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export type RootStore = ReturnType<typeof store.getState>;

const persistor = persistStore(store);

export { store, persistor };
