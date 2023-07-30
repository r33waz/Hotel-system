import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../src/pages/login/auth";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
 authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persistedReducer,
  },
});

export const persistors = persistStore(store)
