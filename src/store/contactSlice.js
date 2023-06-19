import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        const duplicatedContact = state.find(
          contact => contact.name.toLowerCase() === payload.name.toLowerCase()
        );

        if (duplicatedContact) {
          return alert(`${duplicatedContact.name} is already in contacts`);
        }
        return [payload, ...state];
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: (state, { payload }) => {
      return state.filter(contact => contact.id !== payload);
    },
  },
});
export const contactsReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;
