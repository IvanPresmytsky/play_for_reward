import Input from '~/_common/components/input';
import Menu from '~/_common/components/menu';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './loginForm.css';

const LoginForm = ({ type }) => {
  return (
    <Menu
      title={`Log in as a ${type}`}
    >
      <Input type="name" />
      <Input type="password" />
      <Input type="submit" />
    </Menu>
  );
};

LoginForm.propTypes = {
  type: PropTypes.string.isRequired,
};

export default LoginForm;
