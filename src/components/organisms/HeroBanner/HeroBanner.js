import React from 'react';
import styled, { keyframes } from 'styled-components';
import HeroButtons from 'components/molecules/HeroButtons/HeroButtons';

const keyFrameAnim = keyframes`
0% {
    background-position: top center;
}

100% {
    background-position: bottom center;
}
`;

const StyledTitle = styled.h1`
  color: #fff;
  font-size: 4.8rem;
  font-weight: 600;
`;

const StyledParagraph = styled.p`
  color: #fff;
  font-size: 1.6rem;
  width: 500px;
`;

const HeroBg = styled.div`
  padding: 4.8rem;
  background-size: cover;
  background-position: center center;
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
    url(${({ bg }) => bg && bg});
  animation: ${keyFrameAnim} 25s ease infinite alternate;
`;

const HeroBanner = ({ data, params }) => {
  console.log(data);
  const bgImage = data.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${data.backdrop_path}`
    : `https://image.tmdb.org/t/p/original/${data.poster_path}`;
  return (
    <HeroBg bg={bgImage}>
      <StyledTitle>{data.title || data.name}</StyledTitle>
      <StyledParagraph>{data.overview}</StyledParagraph>
      <HeroButtons data={data} />
      <StyledParagraph>
        Starring: Dan Castellaneta, Julie Kavner, Nancy Cartwright
      </StyledParagraph>
      <StyledParagraph>
        Genre:
        {data.genres &&
          data.genres.map(genre => <span key={genre.id}> {genre.name}</span>)}
      </StyledParagraph>
    </HeroBg>
  );
};

export default HeroBanner;
