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
  marginBottom,
  text,
}) => (
  <StyledButton
    className={className}
    isDisabled={isDisabled}
    modifiers={modifiers}
    marginBottom={marginBottom}
    id={id}
    onClick={!isDisabled ? callAllCallbacks(onClickDefault, clickHandler) : null}
  >
    {children || text}
  </StyledButton>
);


Button.defaultProps = {
  clickHandler: onClickDefault,
  className: null,
  id: null,
  isDisabled: false,
  isResponsive: false,
  modifiers: null,
  text: null,
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
  marginBottom: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
