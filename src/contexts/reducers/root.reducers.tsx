import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginReducer from "./login/login.slice.reducer";
import userReducer from "./user/user.slice.reducer";
import dashboardReducer from "./dashboard/dashboard.slice.reducer";

const reducers = combineReducers({
  login: loginReducer,
  user: userReducer,
  dashboard: dashboardReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const RootReducer = persistReducer(persistConfig, reducers);

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
