import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    backgroundColor: '#ffffff',
    width,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 140,
    width: 140,
  },
  imageConteiner: {
    height: 140,
    width: 140,
    borderRadius: 100,
  },
  text: {
    fontSize: 25,
    paddingHorizontal: 30,
  },
});
