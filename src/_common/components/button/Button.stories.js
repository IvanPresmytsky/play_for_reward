import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
  .add('with text', () => (
    <Button
      text="Hello Button"
    />
  ))
  .add('with html', () => (
    <Button
      text={<span role="img">😀 😎 👍 💯</span>}
    />
  ))
  .add('disabled button', () => (
    <Button
      isDisabled
      text="Disabled button"
    />
  ));
