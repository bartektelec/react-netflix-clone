import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from 'components/organisms/Navbar/Navbar';
import MainView from 'views/MainView';

const Root = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainView} />
        <Route path={['/:type/:id', '/:page/']} component={MainView} />
      </Switch>
    </>
  );
};

export default Root;
