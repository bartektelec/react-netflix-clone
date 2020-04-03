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
  const { page, watchlist } = useContext(PageContext);
  const apikey = useContext(KeyContext);
  const pageType = page || 'tv';

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
      setData(watchlist);
    } else {
      fetch(
        `https://api.themoviedb.org/3/discover/${pageType}?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      )
        .then(result => result.json())
        .then(response => setData(response));
    }
  }, [page]);

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
