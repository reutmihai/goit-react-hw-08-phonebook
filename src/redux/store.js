import { configureStore } from "@reduxjs/toolkit";
import contactsReducer  from "./slices/contactsSlice";
import storage from 'redux-persist/lib/storage';


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
});


