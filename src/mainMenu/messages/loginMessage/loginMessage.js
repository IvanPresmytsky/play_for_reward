import PropTypes from 'prop-types';
import React from 'react';
import Message from '~/_common/components/message';
import { navigateToUserMenu, navigateToLogin } from '~/_common/_helpers/navigationHelper';
import { statuses } from '~/_common/constants';

const LoginMessage = ({ match }) => {
  const { user, status } = match.params;

  const redirection = status === statuses.SUCCEED
    ? () => navigateToUserMenu(user)
    : () => navigateToLogin(user);

  return (
    <Message
      message={`The login for the ${user} is ${status}`}
      redirect={redirection}
      timer={2000}
    />
  );
};

LoginMessage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default LoginMessage;
