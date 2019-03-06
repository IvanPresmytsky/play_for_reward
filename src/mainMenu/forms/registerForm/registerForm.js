import Form from '~/_common/components/form';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { NameInput, PasswordInput } from '~/_common/components/input';
import { userTypes } from '~/_common/constants';


const RegisterForm = ({ submitForm, match }) => {
  const [nameValue, setNameValue] = useState('');
  const [mentorNameValue, setMentorNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

  const { user } = match.params;
  const { MENTOR, PLAYER } = userTypes;
  const isPlayerRigistration = user === userTypes.PLAYER;

  const nameInputId = `${PLAYER}-username`;
  const mentorNameInputId = `${MENTOR}-username`;
  const passwordInputId = `${PLAYER}-password`;
  const confirmPasswordId = `${PLAYER}-confirm-password`;

  const getNameValue = value => setNameValue(value);
  const getMentorNameValue = value => setMentorNameValue(value);
  const getPasswordValue = value => setPasswordValue(value);
  const getConfirmPasswordValue = value => setConfirmPasswordValue(value);
  const getRequiredValues = () => ([
    nameValue,
    passwordValue,
    passwordValue === confirmPasswordValue,
    ...(isPlayerRigistration ? [mentorNameValue] : []),
  ]);

  const onSubmit = () => {
    const mentorName = isPlayerRigistration
      ? { mentorName: mentorNameValue }
      : {};

    const data = {
      username: nameValue,
      password: passwordValue,
      ...mentorName,
    };

    submitForm(data, user);
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
      {isPlayerRigistration && (
        <NameInput
          getValue={getMentorNameValue}
          id={mentorNameInputId}
          key={mentorNameInputId}
          labelText="Enter your mentor username"
        />)
      }
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

RegisterForm.propTypes = {
  match: PropTypes.object.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default RegisterForm;
