import React from "react";

import CardItem from "../components/Cards/CardItem";


const Menu = () => {
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-between">
        <a class="text-decoration-none" href="/category">
          <CardItem
            image="https://i.ibb.co/YDWVkXc/menu.png"
            name="Categorias"
          />
        </a>

        <a class="text-decoration-none" href="/products">
          <CardItem
            image="https://i.ibb.co/YDWVkXc/menu.png"
            name="Ofertas"
          />
        </a>

        <a class="text-decoration-none" href="/">
          <CardItem
            image="https://i.ibb.co/YDWVkXc/menu.png"
            name="Minha conta"
          />
        </a>

        <a class="text-decoration-none" href="/products">
          <CardItem
            image="https://i.ibb.co/YDWVkXc/menu.png"
            name="Produtos"
          />
        </a>

        <a class="text-decoration-none" href="/Store">
          <CardItem
            image="https://i.ibb.co/YDWVkXc/menu.png"
            name="Lojas"
          />
        </a>
      </div>
    </div>
  );
};

export default Menu;
