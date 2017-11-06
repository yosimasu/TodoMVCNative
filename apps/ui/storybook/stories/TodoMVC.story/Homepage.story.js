import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { Homepage } from 'components';

const story = storiesOf('TodoMVC/Homepage', module);

story.add('Combine all element', () => {
  const props = {
    addTodo: action('addTodo'),
  };
  return (
    <Homepage {...props}/>
  );
});
