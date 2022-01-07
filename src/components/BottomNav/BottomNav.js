import React from "react";
import {
  HiViewList,
  HiShoppingCart,
  HiOutlineHome,
  HiOutlineHeart,
} from "react-icons/hi";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import styled from "styled-components";

const BottomNavigation = styled(Navbar)`
  position: fixed;
  justify-content: space-between;
  height:10%;

  @media(min-width: 1280px) {
    position: absolute;
    bottom: -10vh;
  };

  @media(min-width: 1300px) {
    position: absolute;
    bottom: -70vh;
  };
  
`;
const BottomIcon = styled(Nav.Link)`
color: rgb(1, 50, 32);
text-decoration: none;
font-size 1.5rem;

`;

const BottomNav = () => {
  return (
    
    <BottomNavigation fixed="bottom">
      <BottomIcon href="/">
        <HiOutlineHome />
      </BottomIcon>
      <BottomIcon href="/">
        <HiOutlineHeart />
      </BottomIcon>
      <BottomIcon href="/">
        <HiShoppingCart />
      </BottomIcon>
      <BottomIcon href="/menu">
        <HiViewList />
      </BottomIcon>
    </BottomNavigation>
  );
};

export default BottomNav;
