import Form from '~/_common/components/form';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { NameInput, PasswordInput } from '~/_common/components/textInput';
import { authorizationMethods, userTypes } from '~/_common/constants';


const RegisterForm = ({ submitForm, match, mentorName }) => {
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

  const { user } = match.params;
  const { PLAYER } = userTypes;

  const nameInputId = `${PLAYER}-username`;
  const passwordInputId = `${PLAYER}-password`;
  const confirmPasswordId = `${PLAYER}-confirm-password`;

  const getNameValue = value => setNameValue(value);
  const getPasswordValue = value => setPasswordValue(value);
  const getConfirmPasswordValue = value => setConfirmPasswordValue(value);
  const getRequiredValues = () => ([
    nameValue,
    passwordValue,
    passwordValue === confirmPasswordValue,
  ]);

  const onSubmit = () => {
    const data = {
      username: nameValue,
      password: passwordValue,
      ...(mentorName ? { mentorName } : {}),
    };

    submitForm({
      data,
      userType: user,
      method: authorizationMethods.REGISTER,
    });
  };

  return (
    <Form
      onSubmit={onSubmit}
      title={`Register as a ${PLAYER}`}
      requiredValues={getRequiredValues()}
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
        valueToMatch={passwordValue}
      />
    </Form>
  );
};

RegisterForm.defaultProps = {
  mentorName: null,
};

RegisterForm.propTypes = {
  match: PropTypes.object.isRequired,
  mentorName: PropTypes.string,
  submitForm: PropTypes.func.isRequired,
};

export default RegisterForm;
