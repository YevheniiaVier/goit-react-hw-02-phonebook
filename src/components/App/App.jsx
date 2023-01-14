import { Component } from 'react';
import shortid from 'shortid';
import { Container } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Title } from 'components/Title/Title';
import initialContacts from '../../contacts.json';
import defaultUserImg from '../../images/default.png';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = ({ name, number, avatar }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
      avatar: avatar ?? defaultUserImg,
    };
    console.log(this.state.contacts);
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  onClearBtnClick = () => {
    this.setState({ filter: '' });
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
        <Title text="Phonebook" />
        <ContactForm actualContacts={contacts} onSubmit={this.addContact} />
        <Filter
          value={filter}
          onChange={this.changeFilter}
          onClear={this.onClearBtnClick}
        />
        <Title text="Contacts" />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
