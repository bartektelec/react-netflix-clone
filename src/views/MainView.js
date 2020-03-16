import React from 'react';
import CategoryView from 'routes/CategoryView';
import ItemView from 'routes/ItemView';

const MainView = ({ match: { params } }) => {
  return (
    <>
      {params.page ? (
        <CategoryView page={params.page} />
      ) : (
        <ItemView params={params} />
      )}
    </>
  );
};

export default MainView;
