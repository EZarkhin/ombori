import axios from 'axios';
import API_URL from '../../constants/api';

export const REQUEST_USER = 'details/REQUEST_USER';
const requestUser = () => (
  {
    type: REQUEST_USER,
  }
);

export const RECIEVE_USER = 'details/RECIEVE_USER';
const recieveUser = data => (
  {
    type: RECIEVE_USER,
    payload: data,
  }
);

export const fetchUser = id => (dispatch) => {
  dispatch(requestUser());
  return setTimeout(() => axios.get(`${API_URL}/${id}`).then(res => dispatch(recieveUser(res.data.data))), 500);
};

