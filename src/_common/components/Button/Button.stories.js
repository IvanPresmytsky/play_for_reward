import React from 'react';

import { storiesOf } from '@storybook/react';
import {
  boolean,
  number,
  optionsKnob as options,
  text,
  select,
  withKnobs,
} from '@storybook/addon-knobs'; 

import { Button, buttonMods } from './index';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default Button', () => (
    <Button
      id="button"
      isDisabled={boolean('isDisabled', false)}
      marginBottom={`${number('Margin bottom')}px`}
      modifiers={[options(
        'Modifiers',
        buttonMods,
        [buttonMods.RESPONSIVE_X, buttonMods.CANCEL],
        { display: 'inline-check' },
      )]}
    >
      {select('text/children', ['text', 'children'], 'text') === 'text'
        ? text('Text', 'Hello button')
        : (<span role="img">😀 😎 👍 💯</span>)
      }
    </Button>
  ));
