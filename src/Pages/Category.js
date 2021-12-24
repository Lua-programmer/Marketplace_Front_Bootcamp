import React from "react";
import CardItem from "../components/Cards/CardItem";
import styled from "styled-components";

const CategoryItens = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
`;

const Category = () => {
  return (
    <CategoryItens>
        <CardItem
        img="https://live.staticflickr.com/8480/8228240510_2f483ffe14_b.jpg"
        name="Surfe"
        />
        
        
        <CardItem
        img="https://pixahive.com/wp-content/uploads/2020/10/A-boxer-girl-punching-155109-pixahive.jpg"
        name="Boxer"
        />
        
        <CardItem
        img="https://www.adrena.me/blog/wp-content/uploads/2019/10/Homem-praticando-alpinismo-min-1200x675.jpg"
        name="Radicais"
        />
        <CardItem
        img="https://www.sescrio.org.br/wp-content/uploads/2019/08/GettyImages-172339615-550x330.jpg"
        name="Natação"
        />
        <CardItem
        img="https://foreveryoung.sapo.pt/wp-content/uploads/2018/09/Yoga-9.jpg"
        name="Yoga"
        />
    </CategoryItens>
  );
};

export default Category;
