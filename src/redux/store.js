// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import contactsReducer from "./slices/contactsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer, 
    contacts: contactsReducer,
  },
});
