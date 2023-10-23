import React from 'react'

import {ContactName, ContactNumber, DeleteBtn} from './styled/Parts.styled'
import { useDispatch } from 'react-redux';
import { deleteContactAction } from 'redux/slice';

const ContactItem = ({ item }) => {
  const dispatch = useDispatch();
  // delete
  const handleDelete = id => {
    dispatch(deleteContactAction(id));
  };

  return (
    <li style={{ marginBottom: 20 }}>
      <ContactName>{item.contactName}</ContactName>
      <ContactNumber>{item.number}</ContactNumber>
      <DeleteBtn type="button" onClick={() => handleDelete(item.id)}>
        ✖ Delete
      </DeleteBtn>
    </li>
  );
}

export default ContactItem
