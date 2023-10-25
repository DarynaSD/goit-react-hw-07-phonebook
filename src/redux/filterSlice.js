import { createSlice } from "@reduxjs/toolkit";
import { INITAL } from './initialState';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: INITAL.filter, 
  reducers: {
    filterContact: (state, { payload }) => {
      //console.log('payload', payload)
      if (payload.length) {
      //console.log(state)
       return state = payload
        
      } else
       return  state = '' },
  },
});


export const filterReducer = filterSlice.reducer
export const { filterContact } = filterSlice.actions

