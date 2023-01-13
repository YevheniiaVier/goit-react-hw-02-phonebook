import PropTypes from 'prop-types';

import { StyledFilter, FilterLabel } from './Filter.styled';

export const Filter = ({ onChange }) => (
  <FilterLabel>
    Find contacts by name
    <StyledFilter type="text" onChange={onChange} />
  </FilterLabel>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
