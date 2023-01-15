import PropTypes from 'prop-types';

import { NotificationImg, NotificationText } from './Notification.styled';

export const Notification = ({ text, imgPath }) => {
  return (
    <NotificationText>
      {text}
      <NotificationImg src={imgPath} alt={text} />
    </NotificationText>
  );
};

Notification.propTypes = {
  text: PropTypes.string,
  imgPath: PropTypes.string.isRequired,
};
