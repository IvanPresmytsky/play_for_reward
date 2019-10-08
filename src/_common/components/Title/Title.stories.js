import React from 'react';

import { storiesOf } from '@storybook/react';
import {
  number,
  text,
  select,
  withKnobs,
} from '@storybook/addon-knobs';

import { Title, titleTypes, titleFontSizes } from './index';

storiesOf('Title', module)
  .addDecorator(withKnobs)
  .add('default Title', () => (
    <Title
      fontSize={`${number('font size', 32)}px`}
      text={text('Text', 'Default title')}
      type={select(
        'Title type',
        Object.keys(titleTypes),
        titleTypes.h1,
      )}
    />
  ));
