import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { TodoList } from 'components';

const story = storiesOf('TodoMVC/TodoList', module);

story.add('Test TodoList', () => {
  const props = {
    todos: [{
      id: 1,
      text: 'Task #1',
      isCompleted: true,
    }, {
      id: 2,
      text: 'Task #2',
      isCompleted: true,
    }, {
      id: 3,
      text: 'Task #3',
      isCompleted: false,
    }]
  }
  return (
    <TodoList {...props}/>
  );
});
