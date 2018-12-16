import Form from '~/_common/components/form';
import { NameInput, PasswordInput } from '~/_common/components/input';
import PropTypes from 'prop-types';
import React from 'react';

const RegisterForm = ({ children, type, onSubmit }) => {
  const nameInputId = `${type}-username`;
  const passwordInputId = `${type}-password`;
  const confirmPasswordId = `${type}-confirm-password`;
  return (
    <Form
      onSubmit={onSubmit}
      title={`Register as a ${type}`}
    >
      <NameInput
        id={nameInputId}
        key={nameInputId}
        labelText="Enter username"
      />
      {children}
      <PasswordInput
        id={passwordInputId}
        key={passwordInputId}
        labelText="Enter password"
      />
      <PasswordInput 
        id={confirmPasswordId}
        key={confirmPasswordId}
        labelText="Confirm password"
      />
    </Form>
  );
};

RegisterForm.defaultProps = {
  children: null,
}

RegisterForm.propTypes = {
  children: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default RegisterForm;
