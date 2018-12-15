import RegisterForm from '~/mainMenu/_common/registerForm';
import userTypes from '~/_common/constants/userTypes';
import React from 'react';

const MentorRegisterForm = () => (
  <RegisterForm
    type={userTypes.MENTOR}
  />
);

export default MentorRegisterForm;
