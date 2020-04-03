import React, { useContext } from 'react';
import PageContext from 'context';
import Button from 'components/atoms/Button/Button';

const HeroButtons = ({ data }) => {
  const { setWatchlist, page } = useContext(PageContext);
  const searchQuery = `https://google.com/search?q=Watch ${data.title ||
    data.name} Online`;

  const addToWatchlist = () => {
    const newElement = { ...data };
    newElement.type = page;
    setWatchlist(({ results }) => {
      if (results) {
        const sameElements = results.filter(
          item => item.id === newElement.id && item.type === newElement.type
        );
        if (sameElements.length) {
          return { results: [...results] };
        }
        return { results: [...results, newElement] };
      }

      return { results: [newElement] };
    });
  };

  return (
    <>
      <Button href={searchQuery} primary="true">
        Watch now
      </Button>
      <Button onClick={addToWatchlist}>Add to list</Button>
    </>
  );
};

export default HeroButtons;
