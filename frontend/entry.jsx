import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {requestTrucks} from './actions/truck_actions';

window.requestTrucks = requestTrucks;

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDom.render(<Root store={store}/>, root);
});
