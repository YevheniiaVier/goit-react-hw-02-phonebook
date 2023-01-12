import { Component } from 'react';
import shortid from 'shortid';
import { Container } from './App.styled';
import { Form } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import initialContacts from '../../contacts.json';

export class App extends Component {
  state = {
    contacts: initialContacts,
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };
  render() {
    const { contacts } = this.state;
    return (
      <Container>
        <Form onSubmit={this.addContact} />
        <ContactList contacts={contacts} />
      </Container>
    );
  }
}
