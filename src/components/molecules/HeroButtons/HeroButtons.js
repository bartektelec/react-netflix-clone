import React from 'react';
import Button from 'components/atoms/Button/Button';

const HeroButtons = ({ data }) => {
  const searchQuery = `https://google.com/search?q=Watch ${data.title ||
    data.name} Online`;
  return (
    <>
      <Button href={searchQuery} primary="true">
        Watch now
      </Button>
      <Button>Add to list</Button>
    </>
  );
};

export default HeroButtons;
