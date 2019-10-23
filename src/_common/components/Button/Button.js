import React from 'react';
import PropTypes from 'prop-types';
import callAllCallbacks from '~/_common/_helpers/callAllCallbacks';

import buttonMods from './constants/mods.constants';
import * as S from './styled/Button.styled';

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
  <S.Button
    className={className}
    isDisabled={isDisabled}
    modifiers={modifiers}
    marginBottom={marginBottom}
    id={id}
    onClick={!isDisabled ? callAllCallbacks(onClickDefault, clickHandler) : null}
  >
    {children || text}
  </S.Button>
);


Button.defaultProps = {
  clickHandler: onClickDefault,
  className: null,
  id: null,
  isDisabled: false,
  modifiers: null,
  text: null,
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  clickHandler: PropTypes.func,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  modifiers: PropTypes.oneOf(Object.values(buttonMods)),
  marginBottom: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
