import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import axios from "axios";
import { useState, useEffect } from "react";

import CardItem from "../Cards/CardItem";
import styled from "styled-components";

const CardGroup = styled.div`
  width: 100%;
  height: 8rem;


`;
const CardCategory = styled.div`
  display: flex;
  padding: 0.3rem;
`;

const ScrollHomeSports = () => {
  const [categoryCard, setCategoryCard] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [storeCard, setStoreCard] = useState([]);

  const getDataCategories = async () => {
    await axios.get('/categories/find-all')
    .then(response => {
      if(mounted) {

        setCategoryCard(response.data);
      }
    });
  };

  const getDataStore = async () => {
    await axios.get("/companies/find-all").then((response) => {
      if (mounted) {
        // eslint-disable-next-line no-undef

        setStoreCard(response.data);
      }
    });
  };

  useEffect(() => {
    setMounted(true);
    getDataCategories();
    getDataStore();
    // eslint-disable-next-line
  }, [mounted]);

  return (
    <CardGroup>
      <HorizontalScroll>
        <CardCategory>
          {categoryCard.map(category => (
            <CardItem image={category.image} name={category.name} />
          ))}
        </CardCategory>
      </HorizontalScroll>

      <HorizontalScroll>

        <CardCategory>
          {
            storeCard.map( store => (
          <CardItem
            image={store.image}
            name={store.name}
          />
          ))
          }
        </CardCategory>

          </HorizontalScroll>
    </CardGroup>
  );
};

export default ScrollHomeSports;
