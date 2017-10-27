import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { Header } from 'components';

const story = storiesOf('TodoMVC/Header', module);

story.add('Required Props', () => {
  const props = {
    addTodo: action('addTodo'),
  };
  return (
    <Header {...props}/>
  );
});
