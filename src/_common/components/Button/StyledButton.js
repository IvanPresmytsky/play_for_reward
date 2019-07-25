import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import buttonMods from './mods';

export const BUTTON_MODIFIERS = {
  [buttonMods.CANCEL]: () => `
    border: 2px solid tomato;
    color: tomato;

    &:active {
      background-color: tomato;
      color: white;
    }
  `,

  [buttonMods.RESPONSIVE]: () => `
    width: 100%
    height: 100%
  `,
};

export default styled.button`
  background: none;
  border: none;
  border: 2px solid green;
  color: green;
  font-weight: bold;
  margin-bottom: 5px;
  outline: none;
  padding: 5px;

  &:active {
    background-color: green;
    color: white;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};

  ${({ isDisabled }) => isDisabled
    && `
      background-color: white;
      border-color: grey;
      color: grey;

      &:active {
        background-color: white;
        border-color: grey;
        color: grey;
      }
    `}
  ${({ marginBottom }) => marginBottom
    && `
      margin-bottom: ${marginBottom}
    `}
`;
