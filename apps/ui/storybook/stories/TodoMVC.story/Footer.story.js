import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Footer } from 'components';

const story = storiesOf('TodoMVC/Footer', module);

story.add('Required Props', () => {
  const props = {
    activeCount: 1,
    completedCount: 3,
    filter: 'all',
    onClearCompleted: action('onClearCompleted'),
    onShow: action('onShow'),
  };
  return (
    <Footer {...props}/>
  );
});
