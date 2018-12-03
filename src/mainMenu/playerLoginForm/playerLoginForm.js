import LoginForm from '~/mainMenu/_common/loginForm';
import userTypes from '~/_common/constants/userTypes';
import React from 'react';

const PlayerLoginForm = () => (
  <LoginForm
    type={userTypes.PLAYER}
  />
);

export default PlayerLoginForm;
