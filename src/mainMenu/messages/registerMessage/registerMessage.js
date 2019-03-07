import PropTypes from 'prop-types';
import React from 'react';
import Message from '~/_common/components/message';
import { statuses } from '~/_common/constants';
import { navigateToUserMenu, navigateToRegister } from '~/_common/_helpers/navigationHelper';

const RegisterMessage = ({ match, location }) => {
  const { user, status } = match.params;
  const { state: { message } } = location;

  const redirection = status === statuses.SUCCEED
    ? () => navigateToUserMenu(user)
    : () => navigateToRegister(user);

  return (
    <Message
      message={message}
      redirect={redirection}
      timer={2000}
    />
  );
};

RegisterMessage.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default RegisterMessage;
