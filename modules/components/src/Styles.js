import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    flexDirection: 'row',
    width: width,
    bottom: 0,
  },
  footerSelecter: {
    position: 'relative',
    flexDirection: 'row',
  },
  footerSelectActive: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#e6e6e6',
  }
});

export default Styles;
