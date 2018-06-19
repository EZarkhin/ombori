import { REQUEST_USERS, LOAD_MORE_USERS, RECIEVE_USERS } from '../actions';

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  totalPage: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_USERS: {
      console.log('REQUEST_USERS');
      return { ...state, isLoading: true };
    }
    case RECIEVE_USERS: {
      return {
        ...state,
        isLoading: false,
        users: action.payload.data,
        totalPage: action.payload.total_pages,
      };
    }
    case LOAD_MORE_USERS: {
      return {
        ...state,
        isLoading: false,
        users: state.users.concat(action.payload.data),
        totalPage: action.payload.total_pages,
      };
    }
    default: return state;
  }
};
