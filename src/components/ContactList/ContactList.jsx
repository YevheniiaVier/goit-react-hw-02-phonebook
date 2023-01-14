import PropTypes from 'prop-types';

import {
  StyledContacts,
  ContactItem,
  ContactImg,
  StyledSvg,
  Box,
} from './ContactList.styled';
import { Button } from 'components/ContactForm/Button';
import defaultUserImg from '../../images/default.png';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <StyledContacts>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          <Box>
            <ContactImg
              src={contact.avatar === '' ? defaultUserImg : contact.avatar}
              alt={contact.name}
            />
            {contact.name}

            <StyledSvg width="20" height="20" viewBox="0 0 32 32">
              <path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z" />
            </StyledSvg>
            {contact.number}
          </Box>

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
      avatar: PropTypes.string,
    })
  ),
};
