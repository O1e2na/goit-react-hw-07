import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const response = await axios.get('https:// 673a18d1a36b5a62f0b9a3.mockapi.io/'); // Заміни на свій ендпоінт MockAPI
  return response.data;
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
