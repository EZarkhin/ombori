import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Component from './UserDetail';
import { fetchUser } from '../../../store/actions';
import { getUserDetails, isLoading } from '../../../store/selectors';

const actions = {
  getUserData: fetchUser,
};

const selector = createStructuredSelector({
  user: getUserDetails,
  isLoading,
});

export default connect(selector, actions)(Component);
