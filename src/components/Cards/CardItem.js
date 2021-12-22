import React from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";


/* Cards Categoria - inserir onclick nos cards */

const StyledCard = styled(Card)`
  width: 6rem;
`;
const StyleGroupCard = styled.div`
  padding: 0.5rem;
`;

const CardItem = (props) => {
  return (
    <StyleGroupCard>
      <StyledCard className="text-dark">
        <Card.Img variant="top" src={props.img} />
        <Card.ImgOverlay>
          <Card.Title>{props.name}</Card.Title>
        </Card.ImgOverlay>
      </StyledCard>
    </StyleGroupCard>
  );
};

export default CardItem;
