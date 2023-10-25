import React from 'react';

import { ContactName, ContactNumber, DeleteBtn } from './styled/Parts.styled';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/thunks';


const ContactItem = ({ item }) => {
  // const [idItem] = useState([item].id)
  const dispatch = useDispatch();
  // delete
  const handleDelete = itemId => {
    dispatch(removeContact(itemId));
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
};

export default ContactItem;
