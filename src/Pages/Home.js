import React from "react";
import ScrollHomeSports from "../components/ScrollHome/ScrollHomeSports";
import CarouselCardStore from "../components/Carousel/CarouselCardStore";
import styled from "styled-components";

const HomeItens = styled.div`
padding-bottom:5.5rem;
padding-top:5.5rem;
height: 100vh;

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
