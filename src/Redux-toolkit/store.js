import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { todoSlice } from "./todoSlice";
import savetodo from "../utils/savetodo";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);
export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    todo: todoSlice.reducer,
  },
});

store.subscribe(() => {
  console.log(store.getState());
  const state = store.getState();
  savetodo(state.todo);
  console.log(state.todo);
});

export const persistor = persistStore(store);
