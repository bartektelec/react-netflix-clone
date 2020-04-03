import React from 'react';

import key from 'apikey.js';
import PageContext from 'context/PageContext';

const withContext = Component => {
  return <PageContext.Provider value={key}></PageContext.Provider>;
};

export default withContext;
