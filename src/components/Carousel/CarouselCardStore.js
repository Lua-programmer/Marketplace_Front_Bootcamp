import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CardStore from "../Cards/CardStore";
import { useState } from "react";

const CarouselCards = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  /* iniciando o carousel em bootstrap */

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <CardStore
          img="https://iguatemi.com.br/galleriashopping/sites/galleriashopping/files/2018-11/Mundo%20Verde.png"
          name="Mundo Verde"
        />

        <CardStore
          img="http://blog.tremeterra.com.br/wp-content/uploads/2019/08/299018-loja-de-produtos-esportivos-4-dicas-para-escolher-a-ideal.jpg"
          name="Mundo Verde"
        />
      </Carousel>
    </div>
  );
};

export default CarouselCards;
