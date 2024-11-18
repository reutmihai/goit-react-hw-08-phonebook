import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const BASE_URL = "https://67388ebc4eb22e24fca8483e.mockapi.io/contacts/contacts";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async() => {
    const response = await axios.get(BASE_URL);
    return response.data;
});

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, { getState, rejectWithValue }) => {
    const state = getState();
    const existingContact = state.contacts.items.find(
      (item) => item.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (existingContact) {
      return rejectWithValue("Contact already exist");
    }

    const response = await axios.post(BASE_URL, contact);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
    await axios.delete(`${BASE_URL}/${contactId}`);
    return contactId;
})


const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    setFilter: (state, action) => {
        state.filter = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message; 
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
      });
  },
});


export const { setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;


