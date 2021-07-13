import React from "react";
import "./article.component.scss";

const Article = ({ image, header, description, smalltext }) => {
  return (
    <div className="card box">
      <img
        className="card-img-top article-image"
        src={image}
        alt="article images"
      />

      <p className="card-text small-text">{smalltext}</p>
      <div className="card-body">
        <h5 className="card-title">{header}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Article;
