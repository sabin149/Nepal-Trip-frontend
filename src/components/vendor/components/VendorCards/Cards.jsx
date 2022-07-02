import React from "react";
import "./Cards.css";
import { cardsData } from "../../VendorData/VendorData";

import Card from "../VendorCard/Card";

const Cards = ({hotel,token,booking}) => {
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
              hotel={hotel} token={token} booking={booking}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
