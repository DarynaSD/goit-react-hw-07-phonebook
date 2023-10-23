import React from 'react';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import { Section, FormWrapper, ListWrapper } from './styled/Parts.styled';

const App = () => {
    return (
    <Section>
      <FormWrapper>
        <Form />
      </FormWrapper>
      <ListWrapper>
        <Filter />
        <ContactList />
      </ListWrapper>
    </Section>
  );
};

export default App;
