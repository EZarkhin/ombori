import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const List = props => (
  <TouchableOpacity onPress={props.onPress} style={styles.container}>
    <View style={styles.container}>
      <View style={styles.imageConteiner}>
        <Image source={{ uri: props.user.avatar }} style={styles.image} />
      </View>
      <Text style={styles.text}>{props.user.first_name} {props.user.last_name}</Text>
    </View>
  </TouchableOpacity>
);

List.propTypes = {
  onPress: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default List;
