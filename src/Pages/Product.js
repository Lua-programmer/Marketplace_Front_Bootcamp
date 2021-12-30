import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import CardProduct from '../components/Cards/CardProduct';



const Product = () => {
    
    const state = useLocation();
    const id = state.state;

    const [item, setItem] = useState({});
    const [mounted, setMounted] = useState(false);

    const getData = async () =>{
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
        <div>
            <CardProduct
            image={item.image}
            name={item.name}
            price={item.price}
            description={item.description}
            />
        </div>
    )
}

export default Product
