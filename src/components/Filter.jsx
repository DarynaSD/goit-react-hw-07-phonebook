import React from 'react'

import {Input, InputLabelWrapper} from './styled/Parts.styled'
import { useDispatch } from 'react-redux';
import { filterContactAction } from 'redux/slice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = ({ target: { value } }) => {
	  dispatch(filterContactAction(value));
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