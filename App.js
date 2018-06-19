import { createStackNavigator } from 'react-navigation';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/store/';
import UserList from './app/components/Screens/UserListScreen';
import UserDetails from './app/components/Screens/UserDetails';

const App = createStackNavigator(
  {
    Users: UserList,
    Details: UserDetails,
  },
  {
    initialRouteName: 'Users',
  },
);
const store = configureStore();
const createApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
export default createApp;
