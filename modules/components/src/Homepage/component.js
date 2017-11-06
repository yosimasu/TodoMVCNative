import React, { Component } from 'react';
import { View } from 'react-native';
import Styles from '../Styles';

import Header from '../Header';
import TodoList from '../TodoList';
import Footer from '../Footer';

class Homepage extends Component{
  render(){
    const { headerProps, TodoListProps, footerProps } = this.props;
    console.log(TodoListProps);

    return(
      <View style={ Styles.container }>
        <Header {...headerProps } />
        <TodoList todos={ TodoListProps } />
        <Footer {...footerProps } />
      </View>
    )
  }
}

export default Homepage;
