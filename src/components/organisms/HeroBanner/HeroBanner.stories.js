import React from 'react';
import { MemoryRouter } from 'react-router';
import HeroBanner from 'components/organisms/HeroBanner/HeroBanner';

export default {
  title: 'organisms/HeroBanner',
  component: HeroBanner,
  decorators: [],
};

export const Default = () => (
  <MemoryRouter>
    <HeroBanner />
  </MemoryRouter>
);

export const Mobile = () => (
  <MemoryRouter>
    <div style={{ display: 'block', width: '400px' }}>
      <HeroBanner />
    </div>
  </MemoryRouter>
);
