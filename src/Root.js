import React, { useState, useEffect } from 'react';
import Navbar from 'components/organisms/Navbar/Navbar';
import HeroBanner from 'components/organisms/HeroBanner/HeroBanner';

const Root = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/tv/123?api_key=da4622c209e92f622296706520a36d5f&language=en-US'
    )
      .then(response => response.json())
      .then(response => setData(response))
      .catch(err => err);
  }, []);
  return (
    <>
      <Navbar />
      <HeroBanner data={data} />
    </>
  );
};

export default Root;
