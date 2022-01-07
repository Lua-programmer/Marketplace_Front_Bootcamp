import React from "react";
import ScrollHomeSports from "../components/ScrollHome/ScrollHomeSports";
import CarouselCardStore from "../components/Carousel/CarouselCardStore";
import styled from "styled-components";

const HomeItens = styled.div`
  padding-bottom:2.5rem;
  padding-top:4rem;

`
const Home = () => {
  return (
    <HomeItens>
      
      <CarouselCardStore/>
      <ScrollHomeSports/>
      
    </HomeItens>
  );
};

export default Home;
