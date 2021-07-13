import React from "react";
import "./servicecard.component.scss";

const ServiceCard = ({ headertext, image, descriptionText }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt="Card service image" />
      <div className="card-body">
        <h5 className="card-title">{headertext}</h5>
        <p className="card-text">{descriptionText}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
