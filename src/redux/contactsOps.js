import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://<YOUR_MOCKAPI_URL>/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post(API_URL, newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);