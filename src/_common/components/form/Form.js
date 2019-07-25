import Menu from '~/_common/components/menu';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, buttonMods } from '~/_common/components/Button';

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
        modifiers={[buttonMods.RESPONSIVE]}
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
