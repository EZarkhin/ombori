import { createSelector } from 'reselect';

const getState = state => state.users;

export const getUsersList = createSelector(getState, users => users.users);

export const isLoadingList = createSelector(getState, users => users.isLoading);

export const getTotalPage = createSelector(getState, users => users.totalPage);
