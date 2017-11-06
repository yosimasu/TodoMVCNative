import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TodoItem from '../TodoItem';

class TodoList extends Component {
  render(){
    const { todos } = this.props;

    return(
      <View>
        {
          todos.map((todo) => {
            return <TodoItem key={ todo.id } todo={ todo } />
          })
        }
      </View>
    );
  }
}

export default TodoList;
