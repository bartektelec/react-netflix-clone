import React from 'react';
import { MemoryRouter } from 'react-router';
import Navbar from 'components/organisms/Navbar/Navbar';

export default {
  title: 'organisms/Navbar',
  component: Navbar,
  decorators: [],
};

export const Default = () => (
  <MemoryRouter>
    <Navbar />
  </MemoryRouter>
);

export const Mobile = () => (
  <MemoryRouter>
    <div style={{ display: 'block', width: '400px' }}>
      <Navbar />
    </div>
  </MemoryRouter>
);
