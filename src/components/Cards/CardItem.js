import React from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";


/* Cards Categoria - inserir onclick nos cards */

const StyledCard = styled(Card)`
  width: 7rem;
`;
const StyleGroupCard = styled.div`
  padding: 0.3rem;
`;
const StyledCardTitle = styled(Card.Title)`
font-size: 1rem;
text-shadow: 1px 1px 2px black, 0 0 1em green, 0 0 0.2em green;
color: white;
`

const CardItem = (props) => {
  return (
    <StyleGroupCard>
      <StyledCard className="text-dark">
        <Card.Img variant="top" src={props.img} />
        <Card.ImgOverlay>
          <StyledCardTitle>{props.name}</StyledCardTitle>
        </Card.ImgOverlay>
      </StyledCard>
    </StyleGroupCard>
  );
};

export default CardItem;
