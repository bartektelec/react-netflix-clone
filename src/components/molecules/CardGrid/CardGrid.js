import React from 'react';
import styled from 'styled-components';
import Card from 'components/atoms/Card/Card';

const StyledWrapper = styled.div`
  width: auto;
  display: ${({ scroll }) => (scroll ? 'inline-flex' : 'flex')};
  flex-wrap: ${({ scroll }) => (scroll ? 'nowrap' : 'wrap')};
  justify-content: space-around;
`;
const CardGrid = ({ data, mediaType, scroll }) => {
  return (
    <StyledWrapper scroll={scroll}>
      {data.results &&
        data.results.map(item => (
          <Card key={item.id} mediaType={mediaType} data={item} />
        ))}
    </StyledWrapper>
  );
};

export default CardGrid;
