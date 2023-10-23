import { createSlice } from '@reduxjs/toolkit';

import { INITAL } from './initialState';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: INITAL,
  reducers: {
    createContactAction: (state, { payload }) => {
      return {
        ...state,
        contacts: state.contacts ? [payload, ...state.contacts] : [payload],
      };
    },

    deleteContactAction: (state, { payload }) => {
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },

    filterContactAction: (state, { payload }) => {
      if (payload.length) {
        state.filter = payload
      } else
        state.filter = '';
    }
  },
});

export const contactReducer = contactSlice.reducer;
export const { createContactAction, deleteContactAction, filterContactAction } =
  contactSlice.actions;


