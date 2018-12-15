import Input from '~/_common/components/input';
import RegisterForm from '~/mainMenu/_common/registerForm';
import userTypes from '~/_common/constants/userTypes';
import React from 'react';

const PlayerRegisterForm = () => (
  <RegisterForm
    type={userTypes.PLAYER}
  >
    <Input type="name" />
  </RegisterForm>
);

export default PlayerRegisterForm;
