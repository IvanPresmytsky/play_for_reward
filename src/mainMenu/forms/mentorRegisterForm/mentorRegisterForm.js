import Form from '~/_common/components/form';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import userTypes from '~/_common/constants/userTypes';
import { NameInput, PasswordInput } from '~/_common/components/input';


const MentorRegisterForm = ({ onSubmit }) => {
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

  const { MENTOR } = userTypes;
  const nameInputId = `${MENTOR}-username`;
  const passwordInputId = `${MENTOR}-password`;
  const confirmPasswordId = `${MENTOR}-confirm-password`;

  const getNameValue = value => setNameValue(value);
  const getPasswordValue = value => setPasswordValue(value);
  const getConfirmPasswordValue = value => setConfirmPasswordValue(value);

  return (
    <Form
      onSubmit={onSubmit}
      title={`Register as a ${MENTOR}`}
      requiredValues={[nameValue, passwordValue, confirmPasswordValue]}
    >
      <NameInput
        getValue={getNameValue}
        id={nameInputId}
        key={nameInputId}
        labelText="Enter username"
      />
      <PasswordInput
        getValue={getPasswordValue}
        id={passwordInputId}
        key={passwordInputId}
        labelText="Enter password"
      />
      <PasswordInput
        getValue={getConfirmPasswordValue}
        id={confirmPasswordId}
        key={confirmPasswordId}
        labelText="Confirm password"
      />
    </Form>
  );
};

MentorRegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default MentorRegisterForm;
