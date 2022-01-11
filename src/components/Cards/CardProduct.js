import React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import {  HiOutlineHeart } from "react-icons/hi";
import { BsCartPlus } from "react-icons/bs";

import { CardIcon, CardStyle, Description, CardImgStyle } from './Style';


const CardProduct = (props) => {

    const navigate = useNavigate();
    const goToProductPage = () => {
        navigate('/products/find', { state: props.id });
    }

    return (
    
        <CardStyle onClick={goToProductPage}>
            <CardImgStyle variant="top" src={props.image}/>
            <Card.Body>
                <Description>{props.name}</Description>

                <Card.Text>
                    {props.price}
                </Card.Text>

                <Card.Text>
                {props.description}
                </Card.Text>

                <small className="text-muted">
                    Vendido por:
                {props.store}
                </small>
                
                <small className="text-muted">
                    Categoria:
                {props.category}
                </small>

                <CardIcon>
                <HiOutlineHeart />
                </CardIcon>

                <CardIcon>
                <BsCartPlus/>
                </CardIcon>
                
            </Card.Body>
        </CardStyle>
        
        
    )
}

export default CardProduct;