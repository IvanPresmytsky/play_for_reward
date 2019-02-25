import Form from '~/_common/components/form';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import userTypes from '~/_common/constants/userTypes';

import { PasswordInput, NameInput } from '~/_common/components/input';


const MentorLoginForm = ({ submitForm }) => {
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const getNameValue = value => setNameValue(value);
  const getPasswordValue = value => setPasswordValue(value);
  const onSubmit = () => {
    const data = {
      username: nameValue,
      password: passwordValue,
    };
    submitForm(data);
  };

  const { MENTOR } = userTypes;

  return (
    <Form
      title={`Log in as a ${MENTOR}`}
      onSubmit={onSubmit}
      requiredValues={[nameValue, passwordValue]}
    >
      <NameInput
        id={`${MENTOR}-username`}
        getValue={getNameValue}
        labelText="Enter username"
      />
      <PasswordInput
        id={`${MENTOR}-password`}
        getValue={getPasswordValue}
        labelText="Enter password"
      />
    </Form>
  );
};

MentorLoginForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
};

export default MentorLoginForm;

