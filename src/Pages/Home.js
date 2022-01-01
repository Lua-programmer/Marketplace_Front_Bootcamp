import React from "react";
import styled from "styled-components";
import ScrollHomeSports from "../components/ScrollHome/ScrollHomeSports";
import CarouselCardStore from "../components/Carousel/CarouselCardStore";


const HomeDiv = styled.div`
  
  padding: .5rem 0 1rem 0
`;
const Home = () => {
  return (
    <HomeDiv>
      
      <CarouselCardStore/>
      <ScrollHomeSports/>
      
    </HomeDiv>
  );
};

export default Home;
