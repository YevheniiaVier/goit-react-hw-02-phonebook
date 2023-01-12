import PropTypes from 'prop-types';

import { StyledButton } from './Button.styled';

export const Button = ({ text, type }) => {
  return <StyledButton type={type}>{text}</StyledButton>;
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
};
