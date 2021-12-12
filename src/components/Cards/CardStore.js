import React from "react";
import styled from "styled-components";

const CardStoreImg = styled.img`
  width: 100%;
  heigth: 70%;
`;
const CardStoreArea = styled.div`
  
`;

const CardStore = (props) => {
  return (
    <CardStoreArea>
      <div>
        <a href="/">
          <CardStoreImg src={props.img} alt={props.name} />
        </a>
      </div>
    </CardStoreArea>
  );
};

export default CardStore;
