import styled from 'styled-components';

export const StyledContacts = styled.ul`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  margin-top: ${p => p.theme.space[4]}px;
  list-style: none;
  padding: ${p => p.theme.space[0]}px;
`;
export const ContactItem = styled.li`
  color: ${p => p.theme.colors.secondary};
`;
