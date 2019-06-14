import callAllCallbacks from '~/_common/_helpers/callAllCallbacks';
import PropTypes from 'prop-types';
import React from 'react';

import buttonMods from './mods';
import StyledButton from './StyledButton';

const onClickDefault = e => e && e.preventDefault();

export const Button = ({
  children,
  className,
  clickHandler,
  id,
  isDisabled,
  modifiers,
}) => (
  <StyledButton
    className={className}
    isDisabled={isDisabled}
    modifiers={modifiers}
    id={id}
    onClick={!isDisabled ? callAllCallbacks(onClickDefault, clickHandler) : null}
  >
    {children}
  </StyledButton>
);


Button.defaultProps = {
  clickHandler: onClickDefault,
  className: null,
  id: null,
  isDisabled: false,
  isResponsive: false,
  modifiers: null,
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  clickHandler: PropTypes.func,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  isResponsive: PropTypes.bool,
  modifiers: PropTypes.oneOf(Object.values(buttonMods)),
};

export default Button;
