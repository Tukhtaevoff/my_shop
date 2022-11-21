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

  return (
    <article key={id} className="single-item">
      <Link className="x-btn-link" to={"/"}>
        <button className="x-btn" type="button">
          <span style={{ color: color }} title="Close">x</span>
        </button>
      </Link>
      <div className="img-wrapper">
        <img src={singleUser.image} alt={singleUser.title} />
      </div>
      <div className="product-title">
        <h2 style={{ color: color }}>{singleUser.title}</h2>
        <strong style={{ color: color }}>$ {singleUser.price}</strong>
        <p style={{ color: color }}>{singleUser.description}</p>
        <span style={{ color: color }}>{singleUser.category}</span>
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
