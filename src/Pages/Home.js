import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CardStore from "../components/Cards/CardStore";
import styled from "styled-components";
import CarouselCardItem from "../components/Carousel/CarouselCardItem";

const HomeDiv = styled.div`
  background: linear-gradient(
    135deg,
    rgba(100, 217, 87, 1) 11%,
    rgba(156, 222, 146, 1) 31%,
    rgba(174, 246, 199, 1) 56%,
    rgba(227, 255, 168, 1) 81%
  );
  padding: .5rem 0 1rem 0
`;
const Home = () => {
  return (
    <HomeDiv>
      <Navbar />
      <CardStore
        img="https://iguatemi.com.br/galleriashopping/sites/galleriashopping/files/2018-11/Mundo%20Verde.png"
        name="Mundo Verde"
      />
      <CarouselCardItem/>

    </HomeDiv>
  );
};

export default Home;
