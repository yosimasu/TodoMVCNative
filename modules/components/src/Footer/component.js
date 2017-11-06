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
        <View style={ Styles.footerItemsLeft }>
          <Text>{`${activeCount} ` }{( activeCount > 1 ) ? "items" : "item" } left</Text>
        </View>
        <View style={ Styles.footerSelecter }>
          <Text style={[Styles.footerSelecterItem, (filter == 'all') ? Styles.footerSelectActive : null] } >All</Text>
          <Text style={[Styles.footerSelecterItem, (filter == 'active') ? Styles.footerSelectActive : null] }>Active</Text>
          <Text style={[Styles.footerSelecterItem, (filter == 'complete') ? Styles.footerSelectActive : null] }>Complete</Text>
        </View>
        <View style={ Styles.footerClear }>
          <Button title="Clear" onPress={ onClearCompleted } />
        </View>
      </View>
    );
  }
}

export default Footer;
