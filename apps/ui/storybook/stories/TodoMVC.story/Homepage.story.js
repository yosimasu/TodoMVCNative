import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { Homepage } from 'components';

const story = storiesOf('TodoMVC/Homepage', module);

story.add('Combine all element', () => {
  const props = {
    headerProps: {
      addTodo: action('addTodo'),
    },
    TodoListProps: [{
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
    }],
    footerProps: {
      activeCount: 3,
      completedCount: 3,
      filter: 'active',
      onClearCompleted: action('onClearCompleted'),
      onShow: action('onShow'),
    }
  };
  return (
    <Homepage {...props}/>
  );
});
