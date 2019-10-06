import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button, buttonMods } from './index';

const {
  CANCEL,
  RESPONSIVE_X,
} = buttonMods;

storiesOf('Buttons', module)
  .add('default Button with text', () => (
    <Button
      id="button"
    >
      Hello Button
    </Button>
  ))
  .add('default Button with html', () => (
    <Button
      id="button"
    >
      <span role="img">😀 😎 👍 💯</span>
    </Button >
  ))
  .add('default disabled Button', () => (
    <Button
      id="button"
      isDisabled
    >
      Disabled button
    </Button >
  ))
  .add('default responsive Button', () => (
    <Button
      id="button"
      modifiers={[RESPONSIVE_X]}
    >
     Responsive button
    </Button>
  ))
  .add('CancelButton', () => (
    <Button
      id="button"
      modifiers={[CANCEL]}
    >
      Cancel button
    </Button>
  ))
  .add('CancelButton disabled', () => (
    <Button
      id="button"
      isDisabled
      modifiers={[CANCEL]}
    >
      Disabled cancel button
    </Button>
  ))
  .add('CancelButton responsive disabled', () => (
    <Button
      id="button"
      isDisabled
      modifiers={[CANCEL, RESPONSIVE_X]}
    >
      Disabled and responsive cancel button
    </Button>
  ));
