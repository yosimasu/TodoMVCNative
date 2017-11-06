import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { TodoItem } from 'components';

const story = storiesOf('TodoMVC/TodoItem', module);

story.add('Test TodoItem', () => {
  const props = {
    todo: {
      text: 'Task #1',
      isCompleted: true,
    }
  };
  return (
    <TodoItem {...props}/>
  );
});
