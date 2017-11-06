import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { TodoList } from 'components';

const story = storiesOf('TodoMVC/TodoList', module);

story.add('Test TodoList', () => {
  const props = {
    todos: [{
      text: 'Task #1',
      isCompleted: true,
    }, {
      text: 'Task #2',
      isCompleted: true,
    }, {
      text: 'Task #3',
      isCompleted: false,
    }]
  }
  return (
    <TodoList {...props}/>
  );
});
