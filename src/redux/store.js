import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import contactsReducer  from "./slices/contactsSlice";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: "contacts",
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
