// src/redux/filtersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Експортуємо екшени
export const { changeFilter } = filtersSlice.actions;

// Експортуємо селектор для фільтра
export const selectNameFilter = (state) => state.filters.name;

// Експортуємо редюсер за замовчуванням
export default filtersSlice.reducer;
