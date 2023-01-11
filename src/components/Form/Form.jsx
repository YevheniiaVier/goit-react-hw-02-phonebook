// import PropTypes from 'prop-types';
import { Component } from 'react';
import { StyledForm } from './Form.styled';
import { Input } from './Input';

export class Form extends Component {
  state = {};

  render() {
    return (
      <StyledForm>
        <Input content="Name"></Input>
      </StyledForm>
    );
  }
}
