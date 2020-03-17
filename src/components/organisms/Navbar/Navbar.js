import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import routeList from 'routes/routeList';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  position: relative;
  height: 8rem;
  align-items: center;
  padding: 0 3rem;
  background-color: #000;

  @media (max-width: 800px) {
    justify-content: space-between;
  }
`;

const CollapsableMenu = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #000;

  @media (max-width: 800px) {
    padding: 1.6rem;
    display: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'flex')};
    flex-direction: column;
    position: absolute;
    z-index: 10;
    left: 0;
    top: 8rem;
  }
`;

const MenuList = styled.ul`
  padding: 0;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
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

  @media (max-width: 800px) {
    padding: 1.6rem 0;
    font-size: 2.4rem;
    margin: 0;
  }
`;

const BrandLogo = styled(Link)`
  color: #ffd500;
  font-weight: 600;
`;

const StyledMenuBtn = styled.button`
  display: none;

  @media (max-width: 800px) {
    display: inline-block;
  }
`;

const Navbar = () => {
  const [isCollapsed, setCollapse] = useState('true');

  const handleCollapse = () => {
    setCollapse(!isCollapsed);
  };
  return (
    <>
      <StyledNav>
        <BrandLogo to="/">Lameflix</BrandLogo>
        <StyledMenuBtn onClick={handleCollapse}>MENU</StyledMenuBtn>
        <CollapsableMenu isCollapsed={isCollapsed}>
          <MenuList>
            {routeList.map(item => (
              <MenuItem
                exact={item.path === '/'}
                onClick={handleCollapse}
                key={item.name}
                to={item.path}
              >
                {item.name}
              </MenuItem>
            ))}
          </MenuList>
          <SearchBar handleCollapse={handleCollapse} />
        </CollapsableMenu>
      </StyledNav>
    </>
  );
};

export default Navbar;
