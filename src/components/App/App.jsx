import { Component } from 'react';
import shortid from 'shortid';
import { Container } from './App.styled';
import { Form } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import initialContacts from '../../contacts.json';
import { Filter } from 'components/Filter/Filter';
export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
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
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <Container>
        <Form onSubmit={this.addContact} />
        <Filter onChange={this.changeFilter} />

        <ContactList contacts={filteredContacts} />
      </Container>
    );
  }
}
