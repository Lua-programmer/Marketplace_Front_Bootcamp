import React from "react";
import CardItem from "../components/Cards/CardItem";
import axios from "axios";
import { useState, useEffect } from "react";


const Category = () => {
  const [categoryCard, setCategoryCard] = useState([]);
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    await axios.get("/categories/find-all")
    .then((response) => {
      if (mounted) {
        setCategoryCard(response.data);
      }
    });
  };

  useEffect(() => {
    setMounted(true);
    getData();
    // eslint-disable-next-line
  }, [mounted])


  return (
    <div className="d-flex flex-wrap">
      {categoryCard.map(category => (
         <CardItem 
            image={category.image}
            name={category.name}
         />
      ))}
       
    </div>
  );
};

export default Category;
