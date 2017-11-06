import React from 'react';
import { View, TextInput, Button } from 'react-native';
import Styles from '../Styles';

class Header extends React.Component{

  addTask = (text) => {
    console.log(text);
    this.props.addTodo(text);
  }

  render() {
    const { addTodo } = this.props;

    return (
      <View style={ Styles.header } >
        <TextInput placeholder="What need to be done?"
                   style={ Styles.addTodo }
                   onSubmitEditing={(event) => this.addTask(event.nativeEvent.text) }
        />
      </View>
    );
  }
}

export default Header;
