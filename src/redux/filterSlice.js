import { createSlice } from "@reduxjs/toolkit";
import { INITAL } from './initialState';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: INITAL, 
  reducers: {
    filterContact: (state, { payload }) => {
      console.log('payload', payload)
      if (payload.length) {
        state.filter = payload
        console.log(state)
      } else
        state.filter = '' },
  },
});


export const filterReducer = filterSlice.reducer
export const { filterContact } = filterSlice.actions

