import React from 'react';
import PropTypes from 'prop-types';

import Message from '~/_common/components/Message';
import Spinner from '~/_common/components/Spinner';
import { navigateToUserMenu, navigateToAuthorization } from '~/_common/_helpers/navigationHelper';
import { statuses } from '~/_common/constants';

const AuthorizationMessage = ({ match, location }) => {
  const { method, user, status } = match.params;
  const { state: { message } } = location;
  const {
    PENDING,
    SUCCEED,
  } = statuses;

  if (status === PENDING) {
    return <Spinner />;
  }

  const redirection = status === SUCCEED
    ? () => navigateToUserMenu(user)
    : () => navigateToAuthorization(method, user);

  return (
    <Message
      message={message}
      redirect={redirection}
      timer={2000}
    />
  );
};

AuthorizationMessage.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default AuthorizationMessage;
