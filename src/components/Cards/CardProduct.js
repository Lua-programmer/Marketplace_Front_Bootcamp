import React from 'react';
import { useNavigate } from 'react-router-dom';

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

const Description = styled(Card.Title)`
max-width: 17ch;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
font-size: 1.1rem ;
`;


const CardProduct = (props) => {

    const navigate = useNavigate();
    const goToProductPage = () => {
        navigate('/products/find', { state: props.id });
    }

    return (
    
        <Card onClick={goToProductPage}>
            <Card.Img variant="top" src={props.image}/>
            <Card.Body>
                <Description>{props.name}</Description>

                <Card.Text>
                    {props.price}
                </Card.Text>

                <Card.Text>
                {props.description}
                </Card.Text>

                <Card.Text>
                {props.category}
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