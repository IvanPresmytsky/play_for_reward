import LoginForm from '~/mainMenu/_common/loginForm';
import userTypes from '~/_common/constants/userTypes';
import React from 'react';

const MentorLoginForm = () => (
  <LoginForm
    type={userTypes.MENTOR}
  />
);

export default MentorLoginForm;
