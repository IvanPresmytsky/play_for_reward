import Form from '~/_common/components/form';
import { PasswordInput, NameInput } from '~/_common/components/input';
import PropTypes from 'prop-types';
import React from 'react';

const LoginForm = ({ type, onSubmit }) => {
  return (
    <Form
      title={`Log in as a ${type}`}
      onSubmit={onSubmit}
    >
      <NameInput
        id={`${type}-username`}
        labelText="Enter username"
      />
      <PasswordInput
        id={`${type}-password`}
        labelText="Enter password"
      />
    </Form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default LoginForm;
