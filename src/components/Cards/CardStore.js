import React from "react";
import styled from "styled-components";

/* Card lojas carrossel */

const CardStoreImg = styled.img`
  width: 100%;
  heigth: 70%;
`;
const CardStoreArea = styled.div`
  
`;

const CardStore = (props) => {
  return (
    <CardStoreArea>
      
        <a href="/">
          <CardStoreImg src={props.img} alt={props.name} />
        </a>
      
    </CardStoreArea>
  );
};

export default CardStore;
