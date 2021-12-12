import React from "react";

import { BiSearchAlt2 } from "react-icons/bi";
import styled from "styled-components";

const InputSearch = styled.input`
border-radius: .3rem;
padding: .2rem;
margin: .2rem;
background-color: rgb(224, 228, 222);
border-color: rgb(224, 228, 222);
width:70%;
`;

const NavbarSearch = styled.nav`
display: block;
width: 85%;
`
const ButtonSearch = styled.button`
padding: .2rem .1rem;
border-radius: .3rem;
font-size: 1rem;
width:15%;
color: rgb(6, 33, 23);
border-color:none;

`

const Search = () => {
  return (
    <NavbarSearch>
      <form onSubmit="" className="search-input">
        <InputSearch
          className="search"
          type="text"
          placeholder="Encontre aqui"
          required
        /> 
        <ButtonSearch type='submit' value="procurar">{<BiSearchAlt2/>}</ButtonSearch>   
      </form>
    </NavbarSearch>
  );
};

export default Search;
