import React from 'react'

import {Input, InputLabelWrapper} from './styled/Parts.styled'
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';


const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = ({ target: { value } }) => {
    //console.log('filter', value);
    const valueToDispatch = value.trim().toLowerCase();
    dispatch(filterContact(valueToDispatch));
    //console.log('valueToDispatch', valueToDispatch);
  };

  return (
    <InputLabelWrapper>
      <label htmlFor="filterInput">Find contact by name</label>
      <Input
        name="name"
        type="text"
        onChange={handleChangeFilter}
        id="filterInput"
      />
    </InputLabelWrapper>
  );
}

export default Filter