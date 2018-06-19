import axios from 'axios';
import API_URL from '../../constants/api';

export const REQUEST_USERS = 'users/REQUEST_USERS';

export const requestUsers = () => ({
  type: REQUEST_USERS,
});

export const RECIEVE_USERS = 'users/RECIEVE_USERS';

export const recieveUsers = data => ({
  type: RECIEVE_USERS,
  payload: data,
});

export const fetchUsers = () => (dispatch) => {
  dispatch(requestUsers());
  return setTimeout(() => axios.get(`${API_URL}?page=1`).then(res => dispatch(recieveUsers(res.data))), 500);
};

export const LOAD_MORE_USERS = 'users/LOAD_MORE_USERS';
export const loadMoreUsers = data => ({
  type: LOAD_MORE_USERS,
  payload: data,
});

export const fetchMoreUsers = page => dispatch => axios.get(`${API_URL}?page=${page}`)
  .then(res => dispatch(loadMoreUsers(res.data)));
