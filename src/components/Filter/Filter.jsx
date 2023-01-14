import PropTypes from 'prop-types';
import shortid from 'shortid';

import { StyledFilter, FilterLabel, FilterBox, Box } from './Filter.styled';
import { Button } from 'components/ContactForm/Button';
const inputId = shortid.generate();
const onBtnClick = e => console.log(e.currentTarget);
export const Filter = ({ onChange }) => (
  <FilterBox>
    <StyledFilter
      id={inputId}
      type="text"
      placeholder="Name"
      onChange={onChange}
    />

    <FilterLabel htmlFor={inputId}>Find contacts by name</FilterLabel>
  </FilterBox>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
