import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: [],
        filter: ''
    },
    reducers: {
        addContact : (state, action) => {
            const allContacts = state.contacts.map((contact) => contact.name.toLowerCase());
            if(allContacts.includes(action.payload.name.toLowerCase())) {
                alert("This contact was already added!");
                return;

            }
            const newContact = {
                id: nanoid(),
                ...action.payload
            }
            state.contacts.push(newContact);
        },
        removeContact : (state, action) => {
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
        },
        filterContacts : (state, action) => {
            state.filter = action.payload;
        }
    }
});

export const {addContact, removeContact, filterContacts} = contactsSlice.actions;
export default contactsSlice.reducer;


