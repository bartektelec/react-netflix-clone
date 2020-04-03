import ReactDOM from 'react-dom';
import React from 'react';
import { KeyContext } from 'context';
import { HashRouter } from 'react-router-dom';
import GlobalStyle from 'themes/GlobalStyle';
import apikey from 'apikey.js';
import Root from './Root';

const App = () => (
  <KeyContext.Provider value={apikey}>
    <HashRouter basename="/">
      <GlobalStyle />
      <Root />
    </HashRouter>
  </KeyContext.Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
