import React from "react";
import { useState } from "react";


import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from 'react-bootstrap/Collapse'

import { BiSearchAlt2 } from "react-icons/bi";
import styled from "styled-components";


const InputSearch = styled(Form.Control)`
border-radius: .3rem;
padding: .2rem;
background-color: rgb(224, 228, 222);
border-color: rgb(224, 228, 222);
font-size:0.6rem;
`;

const NavbarSearch = styled.div`
display: flex;
padding: 0.2rem;
width:100%;
justify-content: space-around;
`
const ButtonSearch = styled.div`
font-size: 1.2rem;
color: rgb(6, 33, 23);
`

const Search = (props) => {

  const [open, setOpen] = useState(false);

  return (
    <NavbarSearch>
      <Form onSubmit={props.onSubmit}>
      <Row>
        <Collapse in={open}>
        <Col>
        <InputSearch
          type="text"
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
  );
};

export default Search;