import React from 'react';
import PageContext from 'context';
import CategoryView from 'routes/CategoryView';
import ItemView from 'routes/ItemView';
import apikey from 'apikey.js';

const MainView = ({ match: { params } }) => {
  return (
    <PageContext.Provider value={{ ...params }}>
      {params.page ? (
        <CategoryView page={params.page} />
      ) : (
        <ItemView params={params} />
      )}
    </PageContext.Provider>
  );
};

export default MainView;
