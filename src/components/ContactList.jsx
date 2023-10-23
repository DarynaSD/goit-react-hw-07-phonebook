import React from 'react';

import ContactItem from './ContactItem';
import { List } from './styled/Parts.styled';
import { useSelector } from 'react-redux';
import { selectorContacts, selectorFilter } from 'redux/selectors';

const ContactList = () => {
  // console.log('ContactList :>>', contacts);
  // console.log('ContactList :>>', filter);
  const contacts = useSelector(selectorContacts);
  const filter = useSelector(selectorFilter);

  const filteredContacts = () => {
    if (filter) {
      const filtered = contacts.filter(one =>
        one.contactName.toLowerCase().includes(filter.toLowerCase())
      );
      return filtered;
    } else return contacts;
  };

  const newContArr = filteredContacts();

  return (
    <List>
      {newContArr.map(oneCont => (
        <ContactItem item={oneCont} key={oneCont.id} />
      ))}
    </List>
  );
};

export default ContactList;
