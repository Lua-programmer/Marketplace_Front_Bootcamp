import React from "react";
import CardItem from "../components/Cards/CardItem";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

const CategoryItens = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  padding-bottom:5.5rem;
  padding-top:5.5rem;
`;

const Category = () => {
  const [categoryCard, setCategoryCard] = useState([]);
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    await axios.get("/categories/find-all")
    .then((response) => {
      if (mounted) {
        setCategoryCard(response.data);
      }
    });
  };

  useEffect(() => {
    setMounted(true);
    getData();
    // eslint-disable-next-line
  }, [mounted])


  return (
    <CategoryItens>
      {categoryCard.map(category => (
         <CardItem 
            image={category.image}
            name={category.name}
         />
      ))}
       
    </CategoryItens>
  );
};

export default Category;
