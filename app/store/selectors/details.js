import { createSelector } from 'reselect';

const getState = state => state.details;

export const getUserDetails = createSelector(getState, details => details.user);

export const isLoading = createSelector(getState, details => details.isLoading);
