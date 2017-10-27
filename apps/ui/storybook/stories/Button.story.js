import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from 'components';

storiesOf('Button', module)
.add('with text', () => (
  <Button onPress={action('clicked-text')}>
    <Text>Hello Button!!!</Text>
  </Button>
))
.add('with some emoji', () => (
  <Button onPress={action('clicked-emoji')}>
    <Text>😀 😎 👍 💯</Text>
  </Button>
));