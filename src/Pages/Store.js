import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';

import CardDescription from '../components/Cards/CardDescriptionStore';


const Store = () => {

    const [storeCard, setStoreCard] = useState([]);
    const [mounted, setMounted] = useState(false);

    const getData = async () => {
        await axios.get('/companies/find-all')
        .then(response => {
            if(mounted) {
                setStoreCard(response.data);
            }
        });
    };

    useEffect(() => {
        setMounted(true);
        getData();
        // eslint-disable-next-line
    },[mounted]);

    return (
        <div>

            {
                storeCard.map (companie => (

                
            <CardDescription
            image={companie.image}
            name={companie.name}
            description1={companie.address}
            description2={companie.city}
            description3={companie.uf}
            />
            ))
            }

        </div>
    )
}

export default Store;
