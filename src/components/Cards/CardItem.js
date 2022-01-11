import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from 'react-router-dom';

import { StyleGroupCard, StyleCard, StyleCardTitle } from './Style';

function CardItem(props) {


  const navigate = useNavigate();
  const goToCategory = () => {
    navigate('/categories/find/', { state: props.id });
  };


  return (
    <StyleGroupCard>
      <StyleCard onClick={goToCategory}>
        <Card.Img variant="top" src={props.image} />
        <Card.ImgOverlay>
          <StyleCardTitle>{props.name}</StyleCardTitle>
        </Card.ImgOverlay>
      </StyleCard>
    </StyleGroupCard>
  );
}

export default CardItem;
