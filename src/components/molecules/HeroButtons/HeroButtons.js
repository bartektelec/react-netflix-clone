import React, { useContext } from 'react';
import PageContext from 'context';
import Button from 'components/atoms/Button/Button';

const HeroButtons = ({ data }) => {
  const { watchlist, setWatchlist, page } = useContext(PageContext);
  const searchQuery = `https://google.com/search?q=Watch ${data.title ||
    data.name} Online`;

  const addToWatchlist = () => {
    const { id, backdrop_path, poster_path, name, title } = data;
    const newElement = { id, backdrop_path, poster_path, name, title };
    newElement.type = page;
    const newResult = (() => {
      if (watchlist.results) {
        const prevResult = watchlist.results;
        const sameElements = prevResult.filter(
          item => item.id === newElement.id && item.type === newElement.type
        );
        if (sameElements.length) {
          return { results: [...prevResult] };
        }
        return { results: [...prevResult, newElement] };
      }

      return { results: [newElement] };
    })();
    setWatchlist(newResult);
    localStorage.setItem('lameWatchlist', JSON.stringify(newResult));
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
