import React from "react";
import Search from "../Search/Search";
import styled from "styled-components";
import { IoPerson } from "react-icons/io5";
import Navbar from 'react-bootstrap/Navbar';


const HeaderNav = styled(Navbar)`
  padding:auto;
  display: flex;
  justify-content: space-between;
  height:13%;

`;
const LinkNav = styled(Navbar.Brand)`
color: rgb(1, 50, 32);
text-decoration: none;
font-size 1.2rem;
padding: 0.5rem;

`;

/* const LinkLogo = styled(Navbar.Brand)`
heigth:18%;
width:30%;

  @media(min-width: 360px) {
    src: url(${props => props.src});
    heigth:18%;
    width:30%;
  
  };

  @media(min-width: 375px) {
    src: url(${props => props.src});
    heigth:18%;
    width:30%;
    margin-left: 10%;
  };

  @media(min-width: 400px) {
    src: url(${props => props.src});
    heigth:18%;
    width:30%
    
  };

  @media(min-width: 540px) {
    src: url(${props => props.src});
    width: 5%;
    margin-left: 40%
  };

  @media (min-width: 800px) {
    src: url(${props => props.src});
    width: 14%;
    margin-top: -5px;
    margin-left: 58%
  };

  @media(min-width: 1280px) {
    src: url(${props => props.src});
    width: 15%;
    margin-top: -5px;
    margin-left: 62%
  };

  @media(min-width: 1300px) {
    src: url(${props => props.src});
    width: 15%;
    margin-top: -5px;
    margin-left: 66%
  };
` */

const HeaderNavbar = () => {
  return (
    <HeaderNav fixed="top"  >

      {/* inserir boas vindas quando logado */}
      <Navbar.Brand href='/'>
        {
      <img width='100%' alt="Healthy Life" src="https://i.ibb.co/gWjkJJ0/Captura-de-tela-2021-12-27-222135-removebg-preview-1.png" />
        }
      </Navbar.Brand>

      <LinkNav href="/login">
        <IoPerson />
      </LinkNav>
      <Search />
    
    </HeaderNav>
  );
};

export default HeaderNavbar;
