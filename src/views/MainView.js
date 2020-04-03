import React from 'react';
import PageContext from 'context';
import CategoryView from 'routes/CategoryView';
import ItemView from 'routes/ItemView';
import apikey from 'apikey.js';

const MainView = ({ match: { params } }) => {
  if (!params.page) {
    params = { page: 'tv', id: '456' };
  }
  return (
    <PageContext.Provider value={{ ...params }}>
      {params.id ? <ItemView /> : <CategoryView />}
    </PageContext.Provider>
  );
};

export default MainView;
