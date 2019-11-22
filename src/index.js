import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import {fetchResults, getTraffic} from './lib/service.js';
import {convertSubgraph} from './lib/utils.js';
import {Provider} from 'react-redux';
import {theme} from './lib/theme';
import {ThemeProvider} from '@material-ui/styles';

const changeSelectedEvent = val =>
  store.dispatch({type: 'SELECT_EVENT', payload: val});
const unselectSelectedEvent = val => {
  console.log('unselec');
  store.dispatch({type: 'UNSELECT_EVENT', payload: val});
};
const changeCity = val => store.dispatch({type: 'SELECT_CITY', payload: val});
const changeViewport = val =>
  store.dispatch({type: 'SET_VIEWPORT', payload: val});
const changeEventData = val =>
  store.dispatch({type: 'CHANGE_EVENTDATA', payload: 'somevalue'});
const changeFilter = val => store.dispatch({type: 'SET_FILTER', payload: val});
const resetFilter = () => store.dispatch({type: 'RESET_FILTER', payload: {}});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

