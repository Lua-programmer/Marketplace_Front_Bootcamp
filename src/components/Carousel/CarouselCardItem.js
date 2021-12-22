import React from 'react';
import CardItem from '../Cards/CardItem';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';


const CardGroup = styled.div`
flex:none;
`



const CarouselCardItem = () => {
    return (
        <CardGroup>
            <Carousel>
            <Carousel.Item >
            <CardItem
            img="https://live.staticflickr.com/8480/8228240510_2f483ffe14_b.jpg"
            name="Surfe"
            />
            </Carousel.Item>
            <Carousel.Item >
                <CardItem
            img="https://pixahive.com/wp-content/uploads/2020/10/A-boxer-girl-punching-155109-pixahive.jpg"
            name="Boxer"
            />
            </Carousel.Item>
            <Carousel.Item >
                <CardItem
            img="https://pixahive.com/wp-content/uploads/2020/10/A-boxer-girl-punching-155109-pixahive.jpg"
            name="Boxer"
            />
            </Carousel.Item>
            <Carousel.Item >
                <CardItem
            img="https://pixahive.com/wp-content/uploads/2020/10/A-boxer-girl-punching-155109-pixahive.jpg"
            name="Boxer"
            />
            </Carousel.Item>
            </Carousel>
        </CardGroup>
    )
}

export default CarouselCardItem
