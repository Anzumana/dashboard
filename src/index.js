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

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

