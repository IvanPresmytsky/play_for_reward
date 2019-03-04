import PropTypes from 'prop-types';
import React from 'react';
import Message from '~/_common/components/message';
import statuses from '~/_common/constants/statuses.constants';
import { navigateToGames, navigateToLogin } from '~/_common/_helpers/navigationHelper';

const LoginMessage = ({ match }) => {
  const { user, status } = match.params;

  const redirection = status === statuses.SUCCEED
    ? navigateToGames
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
