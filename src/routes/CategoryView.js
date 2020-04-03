import React, { useEffect, useState, useContext } from 'react';
import PageContext from 'context';
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

const CategoryPage = ({ scroll }) => {
  const [data, setData] = useState([]);
  const { page, type, apikey } = useContext(PageContext);
  const pageType = page || type;
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/${pageType}?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    )
      .then(result => result.json())
      .then(response => setData(response));
  }, [pageType]);
  return (
    <>
      <StyledHeading>
        Popular {pageType === 'movie' ? 'movies' : 'TV series'}
      </StyledHeading>
      <StyledWrapper>
        <CardGrid scroll={scroll} data={data} mediaType={pageType} />
      </StyledWrapper>
    </>
  );
};

export default CategoryPage;
