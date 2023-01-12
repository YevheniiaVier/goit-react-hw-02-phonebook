// import PropTypes from 'prop-types';
import { Component } from 'react';
import shortid from 'shortid';

import { StyledForm, StyledInput, StyledLabel } from './Form.styled';
// import { Input } from './Input';
import { Button } from './Button';

export class Form extends Component {
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

    this.props.onSubmit(this.state);

    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    // const { name, number } = this.state;
    return (
      <StyledForm onSubmit={this.handleSubmit}>
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

        <Button text="Add contact" type="submit" />
      </StyledForm>
    );
  }
}
