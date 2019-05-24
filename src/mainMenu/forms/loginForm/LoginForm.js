import Form from '~/_common/components/form';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { authorizationMethods, userTypes } from '~/_common/constants';

import { PasswordInput, NameInput } from '~/_common/components/textInput';

const LoginForm = ({
  submitForm,
  match,
}) => {
  const [nameValue, setNameValue] = useState('');
  const [mentorNameValue, setMentorNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const { user } = match.params;
  const isPlayerLogin = user === userTypes.PLAYER;

  const getNameValue = value => setNameValue(value);
  const getMentorNameValue = value => setMentorNameValue(value);
  const getPasswordValue = value => setPasswordValue(value);
  const getRequiredValues = () => ([
    nameValue,
    passwordValue,
    ...(isPlayerLogin ? [mentorNameValue] : []),
  ]);

  const onSubmit = () => {
    const mentorName = isPlayerLogin
      ? { mentorName: mentorNameValue }
      : {};

    const data = {
      username: nameValue,
      password: passwordValue,
      ...mentorName,
    };

    submitForm({
      data,
      userType: user,
      method: authorizationMethods.LOGIN,
    });
  };

  return (
    <Form
      title={`Log in as a ${user}`}
      onSubmit={onSubmit}
      requiredValues={getRequiredValues()}
    >
      <NameInput
        id={`${user}-username`}
        getValue={getNameValue}
        labelText="Enter username"
      />
      {isPlayerLogin && (
        <NameInput
          getValue={getMentorNameValue}
          id="mentor-name"
          labelText="Enter your mentor username"
        />)
      }
      <PasswordInput
        id={`${user}-password`}
        getValue={getPasswordValue}
        labelText="Enter password"
      />
    </Form>
  );
};

LoginForm.propTypes = {
  match: PropTypes.object.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default LoginForm;
