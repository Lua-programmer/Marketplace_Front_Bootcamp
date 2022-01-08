import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Card from 'react-bootstrap/Card';



const Product = () => {
    
    const state = useLocation();
    const id = state.state;

    const [item, setItem] = useState({});
    const [mounted, setMounted] = useState(false);

    const getData = async () => {
        await axios.get(`/products/find/${id}`)
        .then(response => {
            if(mounted) {
                setItem(response.data)
            }
        })
    }

    useEffect(() => {
        setMounted(true)
        getData()
        // eslint-disable-next-line
    }, [mounted])


    return (
        <Card className='m-2'>
        <Card.Img variant="top" src={item.image}/>
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            
            <Card.Text>
                {item.price} 
            </Card.Text>
            
            <Card.Text>
                {item.description} 
            </Card.Text>

            <Card.Text>
                {item.category} 
            </Card.Text>

        </Card.Body>
    </Card>
    )
}

export default Product;
