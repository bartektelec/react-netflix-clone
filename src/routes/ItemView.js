import React, { useEffect, useState, useContext } from 'react';
import PageContext from 'context';
import HeroBanner from 'components/organisms/HeroBanner/HeroBanner';
import CategoryView from 'routes/CategoryView';

const ItemPage = () => {
  const { id, type, apikey } = useContext(PageContext);
  const mediaId = id || 456;
  const mediaType = type || 'tv';
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${mediaType}/${mediaId}?api_key=${apikey}&language=en-US`
    )
      .then(response => response.json())
      .then(response => setMovie(response))
      .catch(err => err);
  }, [mediaType, mediaId]);
  return (
    <>
      <HeroBanner data={movie} />
      <CategoryView scroll={true} />
    </>
  );
};

export default ItemPage;
