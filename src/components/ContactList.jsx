import React, { useEffect } from 'react';

import ContactItem from './ContactItem';
import { List } from './styled/Parts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectorVisible } from 'redux/selectors';
import { fetchContacts } from 'redux/thunks';


const ContactList = () => {
  const filtered = useSelector(selectorVisible);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <List>
        {filtered.map(oneCont => (
          <ContactItem item={oneCont} key={oneCont.id} />
        ))}
      </List>
    </div>
  );
};

export default ContactList;
