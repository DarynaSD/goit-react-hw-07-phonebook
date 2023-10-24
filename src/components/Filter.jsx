import React from 'react'

import {Input, InputLabelWrapper} from './styled/Parts.styled'
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import { selectorFilter } from 'redux/selectors';
// import { filterContact } from 'redux/slice';

const Filter = () => {
  // const dispatch = useDispatch();

  // const handleChangeFilter = ({ target: { value } }) => {
  //   console.log('filter', value);
	//   dispatch(filterContact(value));
  // };

  const valueFromState = useSelector(selectorFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = ({ target: { value } }) => {
    console.log('filter', value);
    const valueToDispatch = value.trim().toLowerCase();
    dispatch(filterContact(valueToDispatch));
  };

  return (
    <InputLabelWrapper>
      <label htmlFor="filterInput">Find contact by name</label>
      <Input
        name="name"
        type="text"
        onChange={handleChangeFilter}
        id="filterInput"
        // value={valueFromState}
      />
    </InputLabelWrapper>
  );
}

export default Filter