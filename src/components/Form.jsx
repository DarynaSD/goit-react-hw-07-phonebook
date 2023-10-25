import { nanoid } from '@reduxjs/toolkit';
import { InputLabelWrapper, Input, Button } from './styled/Parts.styled';

import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorContacts } from 'redux/selectors';
import { addContact } from 'redux/thunks';

const Form = () => {
  const [contactName, setContactName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);

  //
  const createContact = (contactName, number) => {
    const alreadyExist = contacts.find(
      item => item.contactName === contactName
    );
    if (alreadyExist) return alert(`Contact '${contactName}' already exist`);

    const newContact = {
      id: nanoid(),
      contactName,
      number,
    };

    dispatch(addContact(newContact));
  };

  //change
  const handleChange = ({ target: { value, name } }) => {
    name === 'contactName' ? setContactName(value) : setNumber(value);
    //console.log(value, name);
  };

  //submit
  const handleSubmit = e => {
    e.preventDefault();
    createContact(contactName, number);

    setContactName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputLabelWrapper>
        <label htmlFor="nameInput">Name</label>
        <Input
          type="text"
          name="contactName"
          //pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="nameInput"
          value={contactName}
          onChange={handleChange}
          autoFocus
        />
      </InputLabelWrapper>

      <InputLabelWrapper>
        <label htmlFor="telInput">Number</label>
        <Input
          type="tel"
          name="number"
          //pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="telInput"
          value={number}
          onChange={handleChange}
        />
      </InputLabelWrapper>

      <Button type="submit">Create</Button>
    </form>
  );
};

export default Form;
