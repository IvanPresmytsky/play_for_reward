import Form from '~/_common/components/form';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { authorizationMethods } from '~/_common/constants';

import { PasswordInput, NameInput } from '~/_common/components/textInput';

const LoginForm = ({ submitForm, match }) => {
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const { user } = match.params;

  const getNameValue = value => setNameValue(value);
  const getPasswordValue = value => setPasswordValue(value);

  const onSubmit = () => {
    const data = {
      username: nameValue,
      password: passwordValue,
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
      requiredValues={[nameValue, passwordValue]}
    >
      <NameInput
        id={`${user}-username`}
        getValue={getNameValue}
        labelText="Enter username"
        />
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
