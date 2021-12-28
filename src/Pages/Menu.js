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
            img="https://fotos.vivadecora.com.br/decoracao-loja-de-artigos-esportivos-vanessalora-173250-square_cover_xsmall.jpg"
            name="Categorias"
          />
        </CardsMenu>

        <CardsMenu href="/Product">
          <CardItem
            img="https://fotos.vivadecora.com.br/decoracao-loja-de-artigos-esportivos-vanessalora-173250-square_cover_xsmall.jpg"
            name="Ofertas"
          />
        </CardsMenu>

        <CardsMenu href="/">
          <CardItem
            img="https://fotos.vivadecora.com.br/decoracao-loja-de-artigos-esportivos-vanessalora-173250-square_cover_xsmall.jpg"
            name="Minha conta"
          />
        </CardsMenu>

        <CardsMenu href="/product">
          <CardItem
            img="https://fotos.vivadecora.com.br/decoracao-loja-de-artigos-esportivos-vanessalora-173250-square_cover_xsmall.jpg"
            name="Produtos"
          />
        </CardsMenu>

        <CardsMenu href="/Store">
          <CardItem
            img="https://fotos.vivadecora.com.br/decoracao-loja-de-artigos-esportivos-vanessalora-173250-square_cover_xsmall.jpg"
            name="Lojas"
          />
        </CardsMenu>
      </MenuCards>
    </MenuItens>
  );
};

export default Menu;
