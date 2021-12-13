import React from 'react';
import CardItem from '../Cards/CardItem';
import styled from 'styled-components';


const CardGroup = styled.div`
display: flex;
`



const CarouselCardItem = () => {
    return (
        <CardGroup>
            
            <CardItem
            img="https://live.staticflickr.com/8480/8228240510_2f483ffe14_b.jpg"
            name="Surfe"
            />
                <CardItem
            img="https://pixahive.com/wp-content/uploads/2020/10/A-boxer-girl-punching-155109-pixahive.jpg"
            name="Boxer"
            />

        </CardGroup>
    )
}

export default CarouselCardItem
