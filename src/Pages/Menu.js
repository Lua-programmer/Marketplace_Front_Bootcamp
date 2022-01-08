import React from "react";
import CardItem from "../components/Cards/CardItem";
import styled from "styled-components";

const MenuCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const MenuItens = styled.div`
  width: 100%;
  padding-bottom:5.5rem;
  padding-top:5.5rem;
  height: 100vh;
`;

const CardsMenu = styled.a`
  text-decoration: none;
`;

const Menu = () => {
  return (
    <MenuItens>
      <MenuCards>
        <CardsMenu href="/category">
          <CardItem
            image="https://i.ibb.co/YDWVkXc/menu.png"
            name="Categorias"
          />
        </CardsMenu>

        <CardsMenu href="/products">
          <CardItem
            image="https://i.ibb.co/YDWVkXc/menu.png"
            name="Ofertas"
          />
        </CardsMenu>

        <CardsMenu href="/">
          <CardItem
            image="https://i.ibb.co/YDWVkXc/menu.png"
            name="Minha conta"
          />
        </CardsMenu>

        <CardsMenu href="/products">
          <CardItem
            image="https://i.ibb.co/YDWVkXc/menu.png"
            name="Produtos"
          />
        </CardsMenu>

        <CardsMenu href="/Store">
          <CardItem
            image="https://i.ibb.co/YDWVkXc/menu.png"
            name="Lojas"
          />
        </CardsMenu>
      </MenuCards>
    </MenuItens>
  );
};

export default Menu;
