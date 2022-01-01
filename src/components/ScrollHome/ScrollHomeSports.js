import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import axios from "axios";
import { useState, useEffect } from 'react';


import CardItem from "../Cards/CardItem";
import styled from "styled-components";



const CardGroup = styled.div`
  width: 100%;
  height: 10rem;
  padding: 0.5rem;
`;
const CardCategory = styled.div`
  display:flex;
  
`;

const ScrollHomeSports = () => {


  const [categoryCard, setCategoryCard] = useState([]);
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    await axios.get('/categories/find-all')
    .then(response => {
      if(mounted) {
        setCategoryCard(response.data);
      }
    });
  };

  useEffect(() => {
    setMounted(true);
    getData();
    // eslint-disable-next-line
  },[mounted]);
  


  return (
    <CardGroup>

      <HorizontalScroll>

        <CardCategory>
          {
            categoryCard.map( category => (
          <CardItem
            image={category.image}
            name={category.name}
          />
          ))
          }
        </CardCategory>
        
      </HorizontalScroll>
    </CardGroup>
  );
};

export default ScrollHomeSports;
