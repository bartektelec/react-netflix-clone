import React from 'react';
import { MemoryRouter } from 'react-router';
import HeroButtons from 'components/molecules/HeroButtons/HeroButtons';

export default {
  title: 'molecules/HeroButtons',
  component: HeroButtons,
  decorators: [
    storyFn => <div style={{ backgroundColor: 'black' }}>{storyFn()}</div>,
  ],
};

export const Default = () => (
  <MemoryRouter>
    <HeroButtons>Add to list</HeroButtons>
  </MemoryRouter>
);
