import PropTypes from 'prop-types';
import { Component } from 'react';
import shortid from 'shortid';

import { StyledForm, StyledInput, StyledLabel } from './ContactForm.styled';

import { Button } from './Button';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  telInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { elements } = e.currentTarget;

    if (
      this.props.actualContacts.find(
        contact => elements.name.value === contact.name
      )
    ) {
      return alert(`${elements.name.value} is already in contacts`);
    }

    const foundNumber = this.props.actualContacts.find(
      contact => elements.number.value === contact.number
    );
    if (foundNumber) {
      return alert(
        `${elements.number.value} is already belong to ${foundNumber.name}`
      );
    }

    this.props.onSubmit(this.state);
    e.currentTarget.reset();
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <StyledForm autoComplete="off" onSubmit={this.handleSubmit}>
        <StyledLabel htmlFor={this.nameInputId}>Name</StyledLabel>
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
          id={this.nameInputId}
        />
        <StyledLabel htmlFor={this.telInputId}>Number</StyledLabel>
        <StyledInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
          id={this.telInputId}
        />
        <Button text="Add contact" type="submit" active={false} />
      </StyledForm>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  actualContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
