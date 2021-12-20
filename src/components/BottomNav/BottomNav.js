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
  background: linear-gradient(
    135deg,
    rgba(100, 217, 87, 0.85) 3%,
    rgba(156, 222, 146, 0.85) 19%,
    rgba(174, 246, 199, 0.85) 45%,
    rgba(227, 255, 168, 0.85) 75%
  );
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
      <BottomIcon href="/Product">
        <HiViewList />
      </BottomIcon>
    </BottomNavigation>
  );
};

export default BottomNav;
