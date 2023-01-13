import PropTypes from 'prop-types';

import { StyledContacts, ContactItem } from './ContactList.styled';
import { Button } from 'components/ContactForm/Button';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <StyledContacts>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          {contact.name}: {contact.number}
          <Button
            type="button"
            text="Delete"
            active
            onClick={() => onDeleteContact(contact.id)}
          ></Button>
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
