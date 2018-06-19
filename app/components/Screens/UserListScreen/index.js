import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchUsers, fetchMoreUsers } from '../../../store/actions';
import { getUsersList, isLoadingList, getTotalPage } from '../../../store/selectors';

import Component from './UserList';

const actions = {
  onLoadList: fetchUsers,
  onLoadMore: fetchMoreUsers,
};

const selector = createStructuredSelector({
  users: getUsersList,
  isLoading: isLoadingList,
  totalPage: getTotalPage,
});

export default connect(selector, actions)(Component);
