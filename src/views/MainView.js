import React, { useState } from 'react';
import PageContext from 'context';
import CategoryView from 'routes/CategoryView';
import ItemView from 'routes/ItemView';
import apikey from 'apikey.js';

const MainView = ({ match: { params } }) => {
  const initialWatchlist = JSON.parse(localStorage.getItem('lameWatchlist'));
  const [watchlist, setWatchlist] = useState(initialWatchlist || {});
  if (!params.page) {
    params = { page: 'tv', id: '456' };
  }
  return (
    <PageContext.Provider value={{ ...params, watchlist, setWatchlist }}>
      {params.id ? <ItemView /> : <CategoryView />}
    </PageContext.Provider>
  );
};

export default MainView;
