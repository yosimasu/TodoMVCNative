import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Styles from "../Styles";

class TodoItem extends React.Component {
  constructor(props){
    super(props);

    const { isCompleted } = this.props.todo;
    this.state = {
      isCompleted: isCompleted,
    };
  }


  onComplete = () => {
    const { isCompleted } = this.state;
    this.setState({ isCompleted: !isCompleted });
  }

  render() {
    const { todo } = this.props;
    const { isCompleted } = this.state;

    return(
      <View style={ Styles.todoItem }>
        <Text style={ [Styles.todoItemContent, isCompleted ? Styles.todoItemComplete : null] } onPress={ this.onComplete }>{ todo.text }</Text>
        <Text>x</Text>
      </View>
    )
  }
}

export default TodoItem;
