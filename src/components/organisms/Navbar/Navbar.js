import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  height: 8rem;
  align-items: center;
  padding: 0 3rem;
  background-color: #000;
`;

const CollapsableMenu = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const MenuList = styled.ul`
  padding: 0;
`;

const MenuItem = styled(NavLink)`
  margin-left: 3.2rem;
  color: #fff;
  opacity: 0.6;

  :active,
  :focus,
  :hover {
    opacity: 1;
  }
`;

const BrandLogo = styled(Link)`
  color: #ffd500;
  font-weight: 600;
`;

const Navbar = () => {
  return (
    <>
      <StyledNav>
        <BrandLogo to="/">Lameflix</BrandLogo>
        <CollapsableMenu>
          <MenuList>
            <MenuItem exact to="/">
              Home
            </MenuItem>
            <MenuItem to="/movies/">Movies</MenuItem>
            <MenuItem to="/tv/">TV shows</MenuItem>
            <MenuItem to="/watchlist/">My watchlist</MenuItem>
          </MenuList>
          <SearchBar />
        </CollapsableMenu>
      </StyledNav>
    </>
  );
};

export default Navbar;
