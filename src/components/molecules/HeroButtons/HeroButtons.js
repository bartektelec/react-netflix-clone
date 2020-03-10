import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';

const HeroButtons = () => {
  return (
    <>
      <Button as={Link} primary>
        Watch now
      </Button>
      <Button>Add to list</Button>
    </>
  );
};

export default HeroButtons;
