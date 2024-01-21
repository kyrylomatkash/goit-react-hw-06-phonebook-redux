// Імпорт компонентів Redux
import { createSlice } from '@reduxjs/toolkit';
// Стейт
const initialState = {
  editContact: null,
  deleteAllModalOpen: false,
  deleteConfirmationOpen: false,
  contactToDelete: null,
  contactExistsModalOpen: false,
};
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    // Модальне вікно редагування контакту
    setEditContact: (state, action) => {
      state.editContact = action.payload;
    },
    // Модальне вікно видалення усіх контактів
    setDeleteAllModalOpen: (state, action) => {
      state.deleteAllModalOpen = action.payload;
    },
    // Модальне вікно видалення контакту
    setDeleteConfirmationOpen: (state, action) => {
      state.deleteConfirmationOpen = action.payload;
    },
    setContactToDelete: (state, action) => {
      state.contactToDelete = action.payload;
    },
    setContactExistsModalOpen: (state, action) => {
      // Модальне вікно,коли контакт вже існує
      state.contactExistsModalOpen = action.payload;
    },
  },
});
// Експорт
export const {
  setEditContact,
  setDeleteAllModalOpen,
  setDeleteConfirmationOpen,
  setContactToDelete,
  setContactExistsModalOpen,
} = modalSlice.actions;

export default modalSlice.reducer;
