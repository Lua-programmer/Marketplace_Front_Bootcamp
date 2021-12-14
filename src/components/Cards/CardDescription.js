import React from 'react';
import Card from 'react-bootstrap/Card';




const CardDescription = (props) => {
    return (
        
        <Card>
            <Card.Img variant="top" src={props.image}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>
        </Card>
        
    )
}

export default CardDescription;
