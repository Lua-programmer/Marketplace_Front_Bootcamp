import styled from "styled-components";
import Card from 'react-bootstrap/Card';

/* Carousel */
export const CardStoreImg = styled.img`
width: 100%;
heigth: 70%;
`;

/* CardDescriptionStore */
export const CardDescriptionStore = styled(Card)`
box-shadow: 5px 5px 15px 0px #504f5093;
border-radius:0.6rem ;
background-color: rgba(255, 255, 255, 0.568);
`;

/* CardItem */
export const StyleCard = styled(Card)`
box-shadow: 5px 5px 15px 0px #504f5093;
  width: 10rem;
  height: 6rem;
  margin-bottom: 0.8rem;
  margin-left: 0.5rem
`;
export const StyleGroupCard = styled.div`
  padding: 0.3rem;
`;
export const StyleCardTitle = styled(Card.Title)`
font-size: 0.8rem;
text-shadow: 1px 1px 2px black, 0 0 1em green, 0 0 0.2em green;
color: white;
`;

/* CardProduct */

export const CardIcon = styled.a`
color: rgb(1, 50, 32);
text-decoration: none;
font-size 1.2rem;
padding: 0 1rem;

`;
export const CardStyle = styled(CardDescriptionStore)`
margin: 0.3rem;
`

export const Description = styled(Card.Title)`
max-width: 17ch;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
font-size: 1rem ;
`;
export const CardImgStyle = styled(Card.Img)`
border-radius:0.6rem ;
`
