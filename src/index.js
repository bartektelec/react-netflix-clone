import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import GlobalStyle from 'themes/GlobalStyle';
import store from 'store';
import Root from './Root';

const App = () => (
  <Provider store={store}>
    <HashRouter basename="/">
      <GlobalStyle />
      <Root />
    </HashRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
