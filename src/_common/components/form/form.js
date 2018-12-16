import Button from '~/_common/components/button';
import Menu from '~/_common/components/menu';
import PropTypes from 'prop-types';
import React from 'react';

const Form = ({ children, title, onSubmit }) => {
  return (
    <Menu
      title={title}
    >
      {children}
      <Button
        clickHandler={onSubmit}
        text="submit"
      />
    </Menu>
  );
};

Form.defaultProps = {
  children: null,
};

Form.propTypes = {
  children: PropTypes.array,
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;