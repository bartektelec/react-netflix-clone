import React, { useState, useEffect, useContext } from 'react';
import { KeyContext } from 'context';
import { Link } from 'react-router-dom';
import searchIcon from 'assets/icons/svg/search.svg';
import styled from 'styled-components';

const SearchResults = styled.ul`
  display: inline-block;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  background-color: #000;
  color: #fff;
  top: 100%;
  left: 0%;
  right: 0%;
  z-index: 10;

  @media (max-width: 800px) {
    font-size: 2.4rem;
  }
`;

const StyledLink = styled(Link)`
  margin: 8px;
  display: block;
  color: #fff;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  :hover,
  :active,
  :focus {
    opacity: 1;
  }
`;

const StyledInput = styled.input`
  background: none;
  border: none;
  height: 24px;
  border-bottom: 2px solid #fff;
  margin: 0 1.6rem;
  color: #fff;
  opacity: 0.6;
  font-size: 1.6rem;

  @media (max-width: 800px) {
    font-size: 2.4rem;
    width: 100%;
  }

  :hover,
  :active,
  :focus {
    opacity: 1;
  }
`;

const StyledButton = styled.button`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  background-image: url(${searchIcon});
  filter: invert(100%);
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s ease;

  :hover,
  :active,
  :focus {
    opacity: 1;
  }
`;

const StyledForm = styled.form`
  position: relative;
  display: inline-flex;
  align-content: center;
`;

const SearchBar = ({ handleCollapse }) => {
  const [query, setQuery] = useState('');
  const [foundItems, setFoundItems] = useState([]);
  const apikey = useContext(KeyContext);
  console.log(apikey);

  useEffect(() => {}, [query]);

  const removeResults = () => {
    setFoundItems();
    handleCollapse();
  };
  const handleSearch = e => {
    setQuery(e.target.value);
    if (!e.target.value) {
      removeResults();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query) {
      fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${apikey}&language=en-US&page=1&include_adult=false&query=${query}`
      )
        .then(result => result.json())
        .then(data => setFoundItems(data.results))
        .catch(err => err);
    } else {
      removeResults();
    }
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Search for a movie/tv show title"
          value={query}
          onChange={handleSearch}
        />
        <StyledButton type="submit" />
        <SearchResults>
          {foundItems &&
            foundItems.map((item, index) => {
              if (
                (item.media_type === 'movie' && index < 10) ||
                (item.media_type === 'tv' && index < 10)
              ) {
                const itemKey = `/${item.media_type}/${item.id}`;
                const releaseYear = item.release_date
                  ? item.release_date.replace(/-[0-9]{1,2}-[0-9]{1,2}/, ' ')
                  : '';
                const mediaType =
                  item.media_type === 'movie' ? ' movie' : 'TV show';
                return (
                  <StyledLink
                    key={itemKey}
                    onClick={removeResults}
                    to={itemKey}
                  >
                    {item.title || item.name}({releaseYear}
                    {mediaType})
                  </StyledLink>
                );
              }
              return null;
            })}
        </SearchResults>
      </StyledForm>
    </>
  );
};

export default SearchBar;
