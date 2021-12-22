import React from "react";
import CardItem from "../components/Cards/CardItem";
import styled from "styled-components";

const MenuCards = styled.a`
  padding: 0.3rem;
  margin-top: 2rem;
`;

const Menu = () => {
  return (
    <MenuCards>
      <CardItem img="" name="Cateroria" />
      <CardItem img="" name="Ofertas" />
      <CardItem img="" name="Minha conta" />
      <CardItem img="" name="Produtos" />
    </MenuCards>
  );
};

export default Menu;
