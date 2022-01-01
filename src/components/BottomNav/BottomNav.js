import React from "react";
import {
  HiViewList,
  HiShoppingCart,
  HiOutlineHome,
  HiOutlineHeart,
} from "react-icons/hi";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

const BottomNavigation = styled(Navbar)`
  position: fixed;
`;
const BottomIcon = styled.a`
color: rgb(1, 50, 32);
text-decoration: none;
font-size 1.5rem;
padding: 0 1.8rem;
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
