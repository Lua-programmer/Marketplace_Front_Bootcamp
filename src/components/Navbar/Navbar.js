import React from "react";
import Search from "../Search/Search";
import styled from "styled-components";
import { IoPerson } from "react-icons/io5";

const HeaderNav = styled.nav`
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
  @media(max-width: 360px) {
    src: url(${props => props.src});
    heigth:18%;
    width:30%
  };

  @media(max-width: 540px) {
    src: url(${props => props.src});
   
  };

  @media(max-width: 1280px) {
    src: url(${props => props.src});
    width: 15%;
    margin-top: -5px;
    margin-left: 50%
  };
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
