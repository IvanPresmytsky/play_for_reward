import  { NameInput } from '~/_common/components/input';
import RegisterForm from '~/mainMenu/_common/registerForm';
import userTypes from '~/_common/constants/userTypes';
import React from 'react';

const PlayerRegisterForm = () => (
  <RegisterForm
    type={userTypes.PLAYER}
  >
    <NameInput
      id={`${userTypes.MENTOR}-username`}
      labelText="Enter your mentor username"
    />
  </RegisterForm>
);

export default PlayerRegisterForm;
