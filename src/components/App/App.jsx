import { Component } from 'react';
import { Container } from './App.styled';
import { Form } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import initialContacts from '../../contacts.json';

export class App extends Component {
  state = {
    contacts: initialContacts,
    name: '',
  };
  render() {
    const { contacts, name } = this.state;
    return (
      <Container>
        <Form />
        <ContactList contacts={contacts} />
      </Container>
    );
  }
}
