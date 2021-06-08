import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './style/common.css';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/globalStyle';
import theme from './style/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* <GlobalStyle /> */}
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);