import React from "react";
import styled from "styled-components";
import ScrollHomeSports from "../components/ScrollHome/ScrollHomeSports";
import CarouselCardStore from "../components/Carousel/CarouselCardStore";


const HomeDiv = styled.div`

  // background: linear-gradient(
  //   135deg,
  //   rgba(100, 217, 87, 1) 11%,
  //   rgba(156, 222, 146, 1) 31%,
  //   rgba(174, 246, 199, 1) 56%,
  //   rgba(227, 255, 168, 1) 81%
  // );
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
