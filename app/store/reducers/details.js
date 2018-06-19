import { REQUEST_USER, RECIEVE_USER } from '../actions';

const INITIAL_STATE = {
  user: {},
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_USER: {
      return { ...state, isLoading: true };
    }
    case RECIEVE_USER: {
      return { ...state, isLoading: false, user: action.payload };
    }
    default: return state;
  }
};
