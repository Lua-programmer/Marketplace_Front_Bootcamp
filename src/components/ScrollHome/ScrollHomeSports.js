import React from 'react';
import CardItem from '../Cards/CardItem';
import styled from 'styled-components';
import HorizontalScroll from 'react-scroll-horizontal';

const CardGroup = styled.div`
width: 100%;
height: 10rem;
padding: 0.5rem

`



const ScrollHomeSports = () => {
    
    return (
        <CardGroup>
            <HorizontalScroll>
            
            <CardItem
            img="https://live.staticflickr.com/8480/8228240510_2f483ffe14_b.jpg"
            name="Surfe"
            />
            
            
            <CardItem
            img="https://pixahive.com/wp-content/uploads/2020/10/A-boxer-girl-punching-155109-pixahive.jpg"
            name="Boxer"
            />
            
            <CardItem
            img="https://www.adrena.me/blog/wp-content/uploads/2019/10/Homem-praticando-alpinismo-min-1200x675.jpg"
            name="Radicais"
            />
            <CardItem
            img="https://www.sescrio.org.br/wp-content/uploads/2019/08/GettyImages-172339615-550x330.jpg"
            name="Natação"
            />
            <CardItem
            img="https://foreveryoung.sapo.pt/wp-content/uploads/2018/09/Yoga-9.jpg"
            name="Yoga"
            />

            </HorizontalScroll>
        </CardGroup>
    )
}

export default ScrollHomeSports;
