import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, buttonMods } from '~/_common/components/Button';
import List from './List';

storiesOf('Lists', module)
  .add('default List', () => (
    <List 
      items={[
        { text: 'Item1' },
        { text: 'Item2' },
        { text: 'Item3' },
      ]}
      renderItem={(props) => (
        <Button modifiers={[buttonMods.RESPONSIVE]} {...props} />
      )}
    >
      <Button modifiers={[buttonMods.RESPONSIVE]}>Child Item</Button>
    </List>
  ));