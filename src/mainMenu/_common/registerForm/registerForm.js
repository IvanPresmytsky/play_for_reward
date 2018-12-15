import Input from '~/_common/components/input';
import Menu from '~/_common/components/menu';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './registerForm.css';

const RegisterForm = ({ children, type }) => {
  return (
    <Menu
      title={`Register as a ${type}`}
    >
      <Input type="name" />
      {children}
      <Input type="password" />
      <Input type="password" />
      <Input type="submit" />
    </Menu>
  );
};

RegisterForm.propTypes = {
  children: PropTypes.array,
  type: PropTypes.string.isRequired,
};

RegisterForm.defaultProps = {
  children: null,
}

export default RegisterForm;
