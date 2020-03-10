import React from 'react';
import { MemoryRouter } from 'react-router';
import SearchBar from 'components/molecules/SearchBar/SearchBar';

export default {
  title: 'molecules/SearchBar',
  component: SearchBar,
  decorators: [
    storyFn => <div style={{ backgroundColor: 'black' }}>{storyFn()}</div>,
  ],
};

export const Primary = () => (
  <MemoryRouter>
    <SearchBar />
  </MemoryRouter>
);
