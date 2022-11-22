import React from "react";
import { useParams, Link } from "react-router-dom";
import { useData } from "../../contexts/contexts";
import "./SingleProduct.css";

const SingleProduct = () => {
  const { id } = useParams();
  const { isData, color } = useData();

  const singleUser = isData.find((user) => {
    return user.id === +id;
  });

  const colorStyles = { 
    color: color 
  }

  // Single Product is here

  return (
    <article key={id} className="single-item">
      <Link className="x-btn-link" to={"/"}>
        <button className="x-btn" type="button">
          <span style={colorStyles} title="Close">x</span>
        </button>
      </Link>
      <div className="img-wrapper">
        <img src={singleUser.image} alt={singleUser.title} />
      </div>
      <div className="product-title">
        <h2 style={colorStyles}>{singleUser.title}</h2>
        <strong style={colorStyles}>$ {singleUser.price}</strong>
        <p style={colorStyles}>{singleUser.description}</p>
        <span style={colorStyles}>{singleUser.category}</span>
        <div className="buying-blog">
          <Link className="purchase" to="/">
            Purchase
          </Link>
        </div>
      </div>
    </article>
  );
};

export default SingleProduct;
