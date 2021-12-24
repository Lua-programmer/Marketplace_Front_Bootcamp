import React from 'react';
import Card from 'react-bootstrap/Card';
import {  HiOutlineHeart } from "react-icons/hi";
import { BsCartPlus } from "react-icons/bs";
import styled from "styled-components";

const CardIcon = styled.a`
color: rgb(1, 50, 32);
text-decoration: none;
font-size 1.2rem;
padding: 0 1rem;

`;

const CardProduct = (props) => {
    return (
    
        <Card>
            <Card.Img variant="top" src={props.image}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>

                <CardIcon>
                <HiOutlineHeart />
                </CardIcon>

                <CardIcon>
                <BsCartPlus/>
                </CardIcon>

            </Card.Body>
        </Card>
        
        
    )
}

export default CardProduct;