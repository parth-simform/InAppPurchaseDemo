import React from 'react';
import Home from './modules/Home';
import { withIAPContext } from 'react-native-iap';

const App = () => {
  return <Home />;
};

export default withIAPContext(App);
