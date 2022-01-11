import React from 'react';
import Card from 'react-bootstrap/Card';
import { CardDescriptionStore } from './Style';


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
