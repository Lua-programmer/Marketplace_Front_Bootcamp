import React from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';



/* Cards Categoria - inserir onclick nos cards */

const StyledCard = styled(Card)`
  width: 6rem;
`;
const StyleGroupCard = styled.div`
  padding: 0.3rem;
`;
const StyledCardTitle = styled(Card.Title)`
font-size: 0.8rem;
text-shadow: 1px 1px 2px black, 0 0 1em green, 0 0 0.2em green;
color: white;
`

const CardItem = (props) => {

  
  const navigate = useNavigate();
  const goToCategory = () => {
    navigate('/categories/find', {state: props.id});
  };


  return (
    <StyleGroupCard>
      <StyledCard  onClick={goToCategory}>
        <Card.Img variant="top" src={props.img} />
        <Card.ImgOverlay>
          <StyledCardTitle>{props.name}</StyledCardTitle>
        </Card.ImgOverlay>
      </StyledCard>
    </StyleGroupCard>
  );
};

export default CardItem;
