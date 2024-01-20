// Імпорт компонентів Redux
import { createSlice } from '@reduxjs/toolkit';
// Стейт
const initialState = { filter: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    // Фільтр контактів
    filterAction: (state, { payload }) => {
      state.filter = payload;
    },
  },
});
// Експорт
export const filterReducer = filterSlice.reducer;
export const { filterAction } = filterSlice.actions;
