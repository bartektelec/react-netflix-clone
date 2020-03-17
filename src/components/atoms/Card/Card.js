import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardBg = styled(Link)`
  overflow: hidden;
  position: relative;
  display: inline-block;
  margin: 1.6rem;
  width: 200px;
  height: 300px;
  background-size: cover;
  background-image: url(https://image.tmdb.org/t/p/w500/${({ bg }) => bg});
  opacity: 0.6;
  cursor: pointer;
  transition-property: opacity, transform;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  :hover,
  :active {
    opacity: 1;
    transform: scale(1.1);

    > * {
      transform: translateY(0);
    }
  }
`;

const CardTitle = styled.p`
  margin: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.6rem;
  font-size: 1.8rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  transform: translateY(100%);
  transition: transform 0.2s 0.2s ease;
`;

const Card = ({ data, mediaType }) => {
  const hrefLink = `/${mediaType}/${data.id}`;
  const cardName = `${data.name || data.title}`;
  return (
    <CardBg
      to={hrefLink}
      name={cardName}
      bg={data.poster_path || data.backdrop_path}
    >
      <CardTitle>{cardName}</CardTitle>
    </CardBg>
  );
};

export default Card;
