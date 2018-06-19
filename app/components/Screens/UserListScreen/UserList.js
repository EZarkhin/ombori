import React, { PureComponent } from 'react';
import { View, FlatList, Alert } from 'react-native';
import PropTypes from 'prop-types';

import Item from '../../blocks/ListItem';
import Pulse from '../../blocks/Loading';

import styles from './styles';

class UserList extends PureComponent {
  static getDerivedStateFromProps(props, state) {
    if (props.users !== state.users) {
      return {
        users: props.users,
        isLoading: props.isLoading,
        totalPage: props.totalPage,
      };
    }
    if (props.isLoading !== state.isLoading) {
      return {
        isLoading: props.isLoading,
      };
    }
    return null;
  }

  state = {
    users: [],
    isLoading: true,
    currentPage: 2,
    totalPage: 0,
  }

  componentDidMount() {
    this.props.onLoadList();
  }

  onPress = (id) => {
    this.props.navigation.navigate('Details', {
      userId: id,
    });
  }

  onLoadMore = () => {
    const { currentPage, totalPage } = this.state;
    if (currentPage !== totalPage) {
      this.props.onLoadMore(currentPage);
      this.setState({ currentPage: currentPage + 1 });
    } else {
      Alert.alert('Warning', 'There are no more users');
    }
  }

  keyExtractor = item => item.id.toString();

  renderItem = item => <Item user={item.item} onPress={() => this.onPress(item.item.id)} />

  render() {
    const { users, isLoading } = this.state;
    if (isLoading) {
      return (
        <View style={styles.container}>
          <Pulse />
        </View>);
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={users}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          onEndReached={this.onLoadMore}
          onEndReachedThreshold={0.2}
        />
      </View>);
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  onLoadList: PropTypes.func.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default UserList;
