import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
export default StyleSheet.create({
  circleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: width / 2,
    top: height / 2,
    width: 100,
    height: 100,
    marginLeft: -100 / 2,
    marginTop: -100 / 2,
  },
  circle: {
    borderWidth: 4 * StyleSheet.hairlineWidth,
    borderColor: 'green',
    backgroundColor: '#074600',
  },
});
