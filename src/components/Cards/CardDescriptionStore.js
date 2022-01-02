import React from 'react';
import Card from 'react-bootstrap/Card';

/* Vai abrir a pagina da loja com os produtos? Verificar rota */



const CardDescription = (props) => {
    return (
        
        <Card>
            <Card.Img variant="top" src={props.image}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description1} {props.description2} {props.description3}
                </Card.Text>
            </Card.Body>
        </Card>
        
    )
}

export default CardDescription;
