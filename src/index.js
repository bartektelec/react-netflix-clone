import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'themes/GlobalStyle';
import Root from './Root';

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Root />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
