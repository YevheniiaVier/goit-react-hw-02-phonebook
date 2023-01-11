// import PropTypes from 'prop-types';

import { StyledInput, StyledLabel } from './Input.styled';

export const Input = ({ label, content }) => {
  return (
    <StyledLabel>
      {content}
      <StyledInput type="text" name={label} />
    </StyledLabel>
  );
};
