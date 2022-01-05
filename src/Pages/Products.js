import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

import CardProduct from "../components/Cards/CardProduct";
import CardGroup from "react-bootstrap/CardGroup";

const ProductCards = styled.div`
  width: 100%;
  padding: 0.5rem;
  
`;

const Products = () => {
  const [productCard, setProductCard] = useState([]);
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    await axios.get("/products/find-all")
    .then((response) => {
      if (mounted) {
        setProductCard(response.data);
      }
    });
  };

  useEffect(() => {
    setMounted(true);
    getData();
    // eslint-disable-next-line
  }, [mounted]);

  return (
    <ProductCards>
      <CardGroup>
        <Row xs={2} md={4}>
          {productCard.map(product => (
            <Col>
              <CardProduct
                image={product.image}
                name={product.name}
                price={product.price}
              />
            </Col>
          ))}
        </Row>
      </CardGroup>
    </ProductCards>
  );
};

export default Products;
