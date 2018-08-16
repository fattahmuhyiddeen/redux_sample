import React from 'react';
import { Provider } from "react-redux";
import TestScreen from './TestScreen';
import configureStore from './redux/config';

export default () => 
      <Provider store={configureStore()}>
        <TestScreen/>
      </Provider>
