import { StyledFilter, FilterLabel } from './Filter.styled';

export const Filter = ({ onChange }) => (
  <FilterLabel>
    Find contacts by name
    <StyledFilter type="text" onChange={onChange} />
  </FilterLabel>
);
