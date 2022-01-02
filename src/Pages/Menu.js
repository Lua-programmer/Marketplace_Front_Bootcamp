import React from "react";
import CardItem from "../components/Cards/CardItem";
import styled from "styled-components";

const MenuCards = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
`;
const MenuItens = styled.div`
  width: 100%;
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
