import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import Pulse from '../../blocks/Loading';
import styles from './styles';

class UserList extends PureComponent {
  static getDerivedStateFromProps(props, state) {
    if (props.isLoading !== state.isLoading) {
      return {
        user: props.user,
        isLoading: props.isLoading,
      };
    }
    return null;
  }

  state = {
    user: {},
    isLoading: true,
  }

  componentDidMount() {
    const { navigation, getUserData } = this.props;
    const id = navigation.getParam('userId');
    getUserData(id);
  }

  render() {
    if (this.state.isLoading) return <Pulse />;
    return (
      <View style={styles.container}>
        <Image source={{ uri: this.state.user.avatar }} style={styles.image} />
        <Text>{this.state.user.first_name} {this.state.user.last_name}</Text>
      </View>
    );
  }
}

UserList.propTypes = {
  user: PropTypes.object.isRequired,
  navigation: PropTypes.object,
  getUserData: PropTypes.func.isRequired,
};

export default UserList;
