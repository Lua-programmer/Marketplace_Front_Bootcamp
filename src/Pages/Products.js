import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import { Row, Col, CardGroup } from "react-bootstrap";


import CardProduct from "../components/Cards/CardProduct";



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
    <div className="w-100 p-0.5">
      <CardGroup >
        <Row xs={2} md={4}>
          {productCard.map(product => (
            <Col>
              <CardProduct
                image={product.image}
                name={product.name}
                price={product.price}
                store={product.companyId}
                category={product.categories}
              />
            </Col>
          ))}
        </Row>
      </CardGroup>
    </div>
  );
};

export default Products;
