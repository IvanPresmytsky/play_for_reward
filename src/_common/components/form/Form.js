import Button from '~/_common/components/Button';
import Menu from '~/_common/components/menu';
import PropTypes from 'prop-types';
import React from 'react';

const Form = ({
  children,
  onSubmit,
  requiredValues,
  title,
}) => {
  const isValidForm = requiredValues.every(Boolean);

  return (
    <Menu
      title={title}
    >
      {children}
      <Button
        clickHandler={isValidForm ? onSubmit : null}
        isDisabled={!isValidForm}
      >
        submit
      </Button>
    </Menu>
  );
};

Form.defaultProps = {
  children: null,
  requiredValues: [],
};

Form.propTypes = {
  children: PropTypes.array,
  requiredValues: PropTypes.array,
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
