import PropTypes from 'prop-types';
import React from 'react';
import Message from '~/_common/components/message';
import { statuses } from '~/_common/constants';
import { navigateToGames, navigateToRegister } from '~/_common/_helpers/navigationHelper';

const RegisterMessage = ({ match }) => {
  const { user, status } = match.params;

  const redirection = status === statuses.SUCCEED
    ? navigateToGames
    : () => navigateToRegister(user);

  return (
    <Message
      message={`The register for the ${user} is ${status}`}
      redirect={redirection}
      timer={2000}
    />
  );
};

RegisterMessage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default RegisterMessage;
