import PropTypes from 'prop-types';

import { StyledContacts, ContactItem } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <StyledContacts>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          {contact.name}: {contact.number}
        </ContactItem>
      ))}
    </StyledContacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
