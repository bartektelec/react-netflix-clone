import React from 'react';
import Button from 'components/atoms/Button/Button';

export default {
  title: 'atoms/Button',
  component: Button,
  decorators: [
    storyFn => <div style={{ backgroundColor: 'black' }}>{storyFn()}</div>,
  ],
};

export const PrimaryWatch = () => (
  <Button href="" primary>
    Watch now
  </Button>
);

export const AddToList = () => <Button>Add to list</Button>;
