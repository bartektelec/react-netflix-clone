import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import GlobalStyle from 'themes/GlobalStyle';
import Root from './Root';

const App = () => (
  <HashRouter basename="/">
    <GlobalStyle />
    <Root />
  </HashRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
