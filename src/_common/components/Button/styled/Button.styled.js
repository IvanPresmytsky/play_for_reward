import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import buttonMods from '../constants/mods.constants';

export const BUTTON_MODIFIERS = {
  [buttonMods.CANCEL]: () => `
    border: 2px solid tomato;
    color: tomato;

    &:active {
      background-color: tomato;
      color: white;
    }
  `,

  [buttonMods.RESPONSIVE_X]: () => `
    width: 100%;
  `,
  [buttonMods.RESPONSIVE_FULL]: () => `
    width: 100%;
    height: 100%;
  `,
};

export const Button =  styled.button`
  background: none;
  border: none;
  border: 2px solid green;
  border-radius: 5px;
  color: green;
  font-weight: bold;
  outline: none;
  padding: 8px;

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
