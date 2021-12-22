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
          img="https://iguatemi.com.br/galleriashopping/sites/galleriashopping/files/2018-11/Mundo%20Verde.png"
          name="Mundo Verde"
        />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <CardStore
          img="http://observatoriodoesporte.mg.gov.br/wp-content/uploads/2013/05/www.apartmany-sport.cz_1-690x462.jpg"
          name="Artigos Esportivos"
        />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <CardStore
          img="http://observatoriodoesporte.mg.gov.br/wp-content/uploads/2013/05/Foto-www.footballtradedirectory.jpg"
          name="Artigos"
        />
        </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default CarouselCardStore;
