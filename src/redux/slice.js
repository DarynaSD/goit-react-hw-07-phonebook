import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { INITAL } from './initialState';
import { deleteContact, getAllContacts, postContact } from 'api/api';

// export const fetchContacts = () => async (dispatch) => {
// try {  dispatch(contactSlice.actions.pending())
//   const data = await getAllContacts();
//   dispatch(contactSlice.actions.fulfilled(data))
//   console.log(data)
//   }
// catch (error) {
//   dispatch(contactSlice.actions.rejected(error))
// console.log(error)}
// }

//this is created action
export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  return await getAllContacts();
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    return await postContact(newContact);
  }
);

export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    // console.log('id:>>', id)
    return await deleteContact(id);
  }
);

const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload.message;
};


export const contactSlice = createSlice({
  name: 'contacts',
  initialState: INITAL,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items.push(payload);
      })
      .addCase(removeContact.fulfilled, (state, { payload }) => {
        // console.log('payload:>>', payload);
        state.contacts.items = state.contacts.items.filter(
          el => el.id !== payload
        );

      })
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  }

  // reducers: {
  //   pending: (state) => { state.contacts.isLoading = true },
  //   fulfilled: (state, { payload }) => {
  //     state.contacts.isLoading = false;
  //     state.contacts.items = payload;
  //   },
  //   rejected: (state, { payload }) => {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = payload.message;
  //   }
  // }

  //old
  // reducers: {
  //   createContactAction: (state, { payload }) => {
  //     return {
  //       ...state,
  //       contacts: state.contacts ? [payload, ...state.contacts] : [payload],
  //     };
  //   },

  //   deleteContactAction: (state, { payload }) => {
  //     state.contacts = state.contacts.filter(el => el.id !== payload);
  //   },

  //   filterContactAction: (state, { payload }) => {
  //     if (payload.length) {
  //       state.filter = payload
  //     } else
  //       state.filter = '';
  //   }
  // },
});

export const contactReducer = contactSlice.reducer;
export const { createContactAction, deleteContactAction, filterContactAction } =
  contactSlice.actions;
