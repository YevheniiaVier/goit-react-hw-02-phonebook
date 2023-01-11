// import PropTypes from 'prop-types';
// import shortid from 'shortid';

import { StyledContacts, ContactItem } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  //   const ContactId = shortid.generate();

  return (
    <StyledContacts>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>{contact.name}</ContactItem>
      ))}
    </StyledContacts>
  );
};
