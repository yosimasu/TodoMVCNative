import React from 'react';
import { Text, View, Button } from 'react-native';

class Header extends React.Component{
  render() {
    const { addTodo } = this.props;
    return (
      <View>
        <Text>Header</Text>
        <Button title="addTodo" onPress={addTodo} />
      </View>
    );
  }
}

export default Header;
