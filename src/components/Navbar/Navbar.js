import React from "react";
import { useState } from "react";

import { IoPerson } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";

import { Navbar, Form, Row, Col, Collapse } from "react-bootstrap";

import { HeaderNav, LinkNav, InputSearch, NavbarSearch, ButtonSearch } from './Style';


const HeaderNavbar = (props) => {

  const [open, setOpen] = useState(false);

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
      
        <NavbarSearch>
      <Form onSubmit={props.onSubmit}>
      <Row>
        <Collapse in={open}>
        <Col>
        <InputSearch
          type="search"
          placeholder="Buscar"
          required
        /> 
        </Col>
        </Collapse>
        <Col>
        <ButtonSearch onClick={() =>setOpen(!open)}
        aria-controls="Search"
        aria-expanded={open}
        >{<BiSearchAlt2/>}
        </ButtonSearch>   
      </Col>
      </Row>
      </Form>
      </NavbarSearch>
    
    </HeaderNav>
  );
};

export default HeaderNavbar;
