import React from 'react';
import { Text, View, Button } from 'react-native';
import Styles from '../Styles';

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
      <View style={ Styles.footer }>

        <Text>{`${activeCount} ` }{( activeCount > 1 ) ? "items" : "item" }  left </Text>
        <View style={ Styles.footerSelecter }>
          <Text style={(filter == 'all') ? Styles.footerSelectActive : null } >All</Text>
          <Text style={(filter == 'active') ? Styles.footerSelectActive : null }>Active</Text>
          <Text style={(filter == 'complete') ? Styles.footerSelectActive : null }>Complete</Text>
        </View>
        <Button title="Clear Completed" onPress={onClearCompleted}  />
      </View>
    );
  }
}

export default Footer;
