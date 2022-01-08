import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from "styled-components";
/* Vai abrir a pagina da loja com os produtos? Verificar rota */

const CardDescriptionStore = styled(Card)`
box-shadow: 5px 5px 15px 0px #504f5093;
border-radius:0.6rem ;
background-color: rgba(255, 255, 255, 0.568);
`


const CardDescription = (props) => {
    return (
        
        <CardDescriptionStore className='m-2'>
            <Card.Img variant="top" src={props.image}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description1} {props.description2} {props.description3}
                </Card.Text>
            </Card.Body>
        </CardDescriptionStore>
        
    )
}

export default CardDescription;
