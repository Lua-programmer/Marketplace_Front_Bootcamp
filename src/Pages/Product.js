import React from 'react';
import CardProduct from '../components/Cards/CardProduct';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from "styled-components";

const CardsScroll = styled.div`
width:100%;
padding: 0.5rem;

`

const Product = () => {
    return (
        <CardsScroll>

           {/*  
            <CardDescription
            image="http://www.fundacaoprotocantins.org/wp-content/uploads/2019/01/artigos-esportivos-630x410.jpg"
            name="Artigos esportivos"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <CardDescription
            image="https://catracalivre.com.br/wp-content/thumbnails/DlozH9IAtTQ4vo1yrc1DCO1rM9s=/wp-content/uploads/sites/8/2016/08/artigos_esportivos_ronstik.jpg"
            name="Artigos esportivos"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <CardDescription
            image="https://www.freeshop.com.br/blog/wp-content/uploads/2012/09/96527-estender-500-o-sucesso-de-artigos-esportivos-como-brindes.jpg"
            name="Artigos esportivos"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <CardDescription
            image="https://novonegocio.com.br/wp-content/uploads/2011/08/como_montar_uma_loja_de_artigos_esportivos.jpg"
            name="Artigos esportivos"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            /> */}

            <CardGroup >
            <Row xs={2} md={4}>
                <Col>
            <CardProduct
            image="https://www.freeshop.com.br/blog/wp-content/uploads/2012/09/96527-estender-500-o-sucesso-de-artigos-esportivos-como-brindes.jpg"
            name="Artigos esportivos"
            description="Lorem ipsum dolor sit amet."
            />
            </Col>
            <Col>
            <CardProduct
            image="https://www.freeshop.com.br/blog/wp-content/uploads/2012/09/96527-estender-500-o-sucesso-de-artigos-esportivos-como-brindes.jpg"
            name="Artigos esportivos"
            description="Lorem ipsum dolor sit amet."
            />
            </Col>
            
            </Row>
            </CardGroup>
        </CardsScroll>
    )
}

export default Product;
