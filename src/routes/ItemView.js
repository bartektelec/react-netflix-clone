import React, { useEffect, useState } from 'react';
import HeroBanner from 'components/organisms/HeroBanner/HeroBanner';
import CategoryView from 'routes/CategoryView';

const ItemPage = ({ params: { id, type } }) => {
  const mediaId = id || 456;
  const mediaType = type || 'tv';
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${mediaType}/${mediaId}?api_key=da4622c209e92f622296706520a36d5f&language=en-US`
    )
      .then(response => response.json())
      .then(response => setMovie(response))
      .catch(err => err);
  }, [mediaType, mediaId]);
  return (
    <>
      <HeroBanner data={movie} />
      <CategoryView scroll={true} page={mediaType} />
    </>
  );
};

export default ItemPage;
