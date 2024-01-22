// Імпорт компонентів Redux
import { createSlice, nanoid } from '@reduxjs/toolkit';
// Стейт
const initialState = { contacts: [] };

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    // Додавання контакту
    addContactAction: {
      prepare: ({ name, number }) => {
        const newContact = {
          id: nanoid(),
          name,
          number,
        };
        return { payload: newContact };
      },
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
    },
    // Видалення контакту
    deleteContactAction: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    // Видалення усіх контактів
    deleteAllContactsAction: state => {
      state.contacts = [];
    },
    // Редагування контактів
    editContactAction: (state, { payload }) => {
      const index = state.contacts.findIndex(
        contact => contact.id === payload.id
      );
      if (index !== -1) {
        state.contacts[index] = payload;
      }
    },
  },
});
// Експорт
export const {
  addContactAction,
  deleteContactAction,
  deleteAllContactsAction,
  editContactAction,
} = contactSlice.actions;

export const contactsReducer = contactSlice.reducer;
