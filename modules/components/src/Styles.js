import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Styles = StyleSheet.create({
  header: {
    height: height * 0.05,
    borderBottomColor: "#CCC",
    borderBottomWidth: 0.5,
    borderBottomRightRadius: 5,
  },
  addTodo:{
    height: height * 0.05,
  },
  footer: {
    position: 'absolute',
    flexDirection: 'row',
    width: width,
    //bottom: 0,
  },
  footerItemsLeft:{
    width: width * 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerSelecter: {
    position: 'relative',
    flexDirection: 'row',
    width: 0.6 * width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerSelecterItem:{
    paddingLeft: 5,
    paddingRight: 5,
  },
  footerSelectActive: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#e6e6e6',
  },
  footerClear: {
    position: 'relative',
    width: width * 0.2,
  },
});

export default Styles;
