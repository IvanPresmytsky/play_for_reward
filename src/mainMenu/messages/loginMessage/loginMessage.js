import PropTypes from 'prop-types';
import React from 'react';
import Message from '~/_common/components/message';
import { navigateToUserMenu, navigateToLogin } from '~/_common/_helpers/navigationHelper';
import { statuses } from '~/_common/constants';

const LoginMessage = ({ match, location }) => {
  const { user, status } = match.params;
  const { state: { message } } = location;

  const redirection = status === statuses.SUCCEED
    ? () => navigateToUserMenu(user)
    : () => navigateToLogin(user);

  return (
    <Message
      message={message}
      redirect={redirection}
      timer={2000}
    />
  );
};

LoginMessage.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default LoginMessage;
