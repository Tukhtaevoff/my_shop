import React from "react";
import { useParams, Link } from "react-router-dom";
import { useData } from "../../contexts/contexts";
import "./SingleProduct.css";

const SingleProduct = () => {
  const { id } = useParams();
  const { isData } = useData();

  const singleUser = isData.find((user) => {
    return user.id === +id;
  });

  return (
    <article key={id} className="single-item">
      <Link className="x-btn-link" to={"/"}>
        <button className="x-btn" type="button">
          x
        </button>
        <p className="close-text">Close</p>
      </Link>
      <div className="product-img">
        <img src={singleUser.image} alt={singleUser.title} />
      </div>
      <div className="product-title">
        <h2>{singleUser.title}</h2>
        <strong>$ {singleUser.price}</strong>
        <p>{singleUser.description}</p>
        <span>{singleUser.category}</span>
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
