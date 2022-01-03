import React from "react";
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BiSearchAlt2 } from "react-icons/bi";
import styled from "styled-components";

const InputSearch = styled(Form.Control)`
border-radius: .3rem;
padding: .2rem;
margin: 0 0 0  0.2rem;
background-color: rgb(224, 228, 222);
border-color: rgb(224, 228, 222);
width:9rem;
`;

const NavbarSearch = styled.div`
display:flex;
padding: 0.2rem;
`
const ButtonSearch = styled.div`
font-size: 1.2rem;
color: rgb(6, 33, 23);
`

const Search = (props) => {
  return (
    <NavbarSearch>
      <Form onSubmit={props.onSubmit}>
      <Row>
        <Col>
        <InputSearch
          type="text"
          placeholder="Encontre aqui"
          required
        /> 
        </Col>
        <Col>
        <ButtonSearch type='submit' value="procurar">{<BiSearchAlt2/>}</ButtonSearch>   
      </Col>
      </Row>
      </Form>
    </NavbarSearch>
  );
};

export default Search;