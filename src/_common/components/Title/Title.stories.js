import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Title, titleTypes } from './index';

storiesOf('Title', module)
  .addDecorator(withKnobs)
  .add('default Title', () => (
    <Title
      text={text('Text', 'Default title')}
      type={select(
        'Title type',
        Object.keys(titleTypes),
        titleTypes.h1,
      )}
    />
  ));