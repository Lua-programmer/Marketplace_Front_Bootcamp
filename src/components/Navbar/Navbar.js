import React from "react";
import Search from "../Search/Search";
import styled from "styled-components";
import { IoPerson } from "react-icons/io5";

const HeaderNav = styled.nav`
  background: linear-gradient(
    135deg,
    rgba(100, 217, 87, 1) 11%,
    rgba(156, 222, 146, 1) 31%,
    rgba(174, 246, 199, 1) 56%,
    rgba(227, 255, 168, 1) 81%
  );
  padding: 0.5rem 0 0.5rem 0;
  display: flex;
`;
const LoginNav = styled.a`
color: rgb(1, 50, 32);
text-decoration: none;
font-size 1.2rem;
padding:0.2rem;
`;

const Logo = styled.img`
  src: url(${props => props.src});
  heigth:18%;
  width:30%
`

const Navbar = () => {
  return (
    <HeaderNav>
      <Search />
      {/* inserir boas vindas quando logado */}
      
      <Logo src="https://i.ibb.co/gWjkJJ0/Captura-de-tela-2021-12-27-222135-removebg-preview-1.png" />
    
      <LoginNav href="/login">
        <IoPerson />
      </LoginNav>
    </HeaderNav>
  );
};

export default Navbar;
