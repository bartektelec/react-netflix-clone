import React, { useContext } from 'react';
import PageContext from 'context';
import styled from 'styled-components';
import Card from 'components/atoms/Card/Card';

const StyledWrapper = styled.div`
  width: auto;
  display: ${({ scroll }) => (scroll ? 'inline-flex' : 'flex')};
  flex-wrap: ${({ scroll }) => (scroll ? 'nowrap' : 'wrap')};
  justify-content: space-around;
`;
const CardGrid = ({ data, mediaType, scroll }) => {
  const { page } = useContext(PageContext);
  return (
    <StyledWrapper scroll={scroll}>
      {data.results &&
        data.results.map(item => {
          const pageType = item.type || page;
          return <Card key={item.id} pageType={pageType} data={item} />;
        })}
    </StyledWrapper>
  );
};

export default CardGrid;
