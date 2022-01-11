import React from "react";
import { CardStoreImg } from './Style';


const CardStore = (props) => {
  return (
    <div>
      
        <a href="/">
          <CardStoreImg src={props.img} alt={props.name} />
        </a>
      
    </div>
  );
};

export default CardStore;
