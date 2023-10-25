import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteContact, getAllContacts, postContact } from "api/api";

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
    return await deleteContact(id);
  }
);