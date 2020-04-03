import React, { useEffect, useState, useContext } from 'react';
import PageContext, { KeyContext } from 'context';
import styled from 'styled-components';

import CardGrid from 'components/molecules/CardGrid/CardGrid';

const StyledHeading = styled.h2`
  color: #fff;
  margin: 2.4rem;
`;

const StyledWrapper = styled.div`
  margin: 2.4rem;
  width: auto;
  overflow-x: auto;
  overflow-y: hidden;
`;

const CategoryPage = ({ scroll = false }) => {
  const [data, setData] = useState([]);
  const { page, type } = useContext(PageContext);
  const apikey = useContext(KeyContext);
  const pageType = page || type || 'tv';

  const headingText = (() => {
    switch (pageType) {
      case 'movie':
        return 'Popular movies';
      case 'tv':
        return 'Popular TV series';
      case 'watchlist':
        return 'Your watchlist';
      default:
        return 'Home';
    }
  })();
  useEffect(() => {
    if (pageType === 'watchlist') {
      setData({
        results: [
          {
            type: 'movie',
            poster_path: '/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg',
            id: 420818,
            name: 'The Lion King',
          },
          {
            type: 'tv',
            name: 'Money Heist',
            id: 71446,
            poster_path: '/MoEKaPFHABtA1xKoOteirGaHl1.jpg',
          },
        ],
      });
    } else {
      fetch(
        `https://api.themoviedb.org/3/discover/${pageType}?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      )
        .then(result => result.json())
        .then(response => setData(response));
    }
  }, [pageType]);

  return (
    <>
      <StyledHeading>{headingText}</StyledHeading>
      <StyledWrapper>
        <CardGrid
          scroll={scroll}
          data={data}
          isEditable={pageType === 'watchlist'}
        />
      </StyledWrapper>
    </>
  );
};

export default CategoryPage;
