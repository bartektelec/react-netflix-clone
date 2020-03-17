import React, { useEffect, useState } from 'react';
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

const CategoryPage = ({ page, scroll }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/${page}?api_key=da4622c209e92f622296706520a36d5f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    )
      .then(result => result.json())
      .then(response => setData(response));
  }, [page]);
  return (
    <>
      <StyledHeading>
        Popular {page === 'movie' ? 'movies' : 'TV series'}
      </StyledHeading>
      <StyledWrapper>
        <CardGrid scroll={scroll} data={data} mediaType={page} />
      </StyledWrapper>
    </>
  );
};

export default CategoryPage;
