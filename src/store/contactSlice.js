import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { addContact, deleteContact, fetchContacts } from './operations';
import { toast } from 'react-hot-toast';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
      toast.error(`ERROR: ${state.error}`);
    },

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, { payload }) {
      state.error = null;
      state.items.unshift(payload);
      toast.success('Contact successfully added!');
      state.isLoading = false;
    },
    [addContact.rejected](state, { payload }) {
      state.error = payload;
      toast.error(`ERROR: ${state.error}`);
    },

    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.error = null;
      const index = state.items.findIndex(contact => contact.id === payload.id);
      state.items.splice(index, 1);
      toast.success('Contact successfully deleted!');
      state.isLoading = false;
    },
    [deleteContact.rejected](state, action) {
      state.isDeleting = false;
      state.error = action.payload;
      toast.error(`ERROR: ${state.error}`);
    },
  },
});
export const contactsReducer = contactsSlice.reducer;
