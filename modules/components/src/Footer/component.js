import React from 'react';
import { Text, View, Button } from 'react-native';

class Footer extends React.Component {
  render() {
    const {
      activeCount,
      completedCount,
      filter,
      onClearCompleted,
      onShow,
    } = this.props;

    return (
      <View>
        <Text>{`activeCount: ${activeCount}`}</Text>
        <Text>{`completedCount: ${completedCount}`}</Text>
        <Text>{`filter: ${filter}`}</Text>
        <Button onPress={onClearCompleted} title="onClearCompleted" />
        <Button onPress={onShow} title="onShow" />
      </View>
    );
  }
}

export default Footer;
