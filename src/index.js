import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {ThemeProvider} from '@material-ui/styles';
import App from './App';
import store from './store';
import {fetchResults, getTraffic} from './lib/service.js';
import {convertSubgraph} from './lib/utils.js';
import {theme} from './lib/theme';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
