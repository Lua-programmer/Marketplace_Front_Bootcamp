import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CardStore from "../Cards/CardStore";


const CarouselCardStore = () => {

  /* iniciando o carousel em bootstrap -- */

  return (
    <div>
      <Carousel>
        <Carousel.Item interval={5000}>
        <CardStore
          img="https://i.ibb.co/T2wC2yf/Design-sem-nome.png"
          name="bem estar"
        />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <CardStore
          img="https://i.ibb.co/gDYZmm1/Design-sem-nome-2.png"
          name="Vegan food"
        />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <CardStore
          img="https://i.ibb.co/xhXjnMV/Design-sem-nome-4.png"
          name="surf"
        />
        </Carousel.Item>

        <Carousel.Item interval={5000}>
        <CardStore
          img="https://i.ibb.co/L5n67zK/Design-sem-nome-5.png"
          name="surf"
        />
        </Carousel.Item>

        <Carousel.Item interval={5000}>
        <CardStore
          img="https://i.ibb.co/gt96Xyv/Design-sem-nome-3.png"
          name="surf"
        />
        </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default CarouselCardStore;
