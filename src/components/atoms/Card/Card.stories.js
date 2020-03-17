import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Card from 'components/atoms/Card/Card';

export default {
  title: 'atoms/Card',
  component: Card,
  decorators: [
    storyFn => <div style={{ backgroundColor: 'black' }}>{storyFn()}</div>,
  ],
};

export const Primary = () => (
  <BrowserRouter>
    <Card
      href=""
      data={{
        name: 'The Simpsons',
        id: 456,
        media_type: 'movie',
        poster_path: '/qcr9bBY6MVeLzriKCmJOv1562uY.jpg',
      }}
    />
  </BrowserRouter>
);
