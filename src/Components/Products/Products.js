import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../contexts/contexts";
import "./Products.css";

const Products = () => {
  const { isData } = useData();

  return (
    <main>
      <section className="products">
        <div className="products__container">
          <h1 className="title">Our products</h1>
          <div className="products-blog">
          {isData.map((item) => {
            const { title, id, image } = item;
            return (
              <article className="item" key={id}>
                <Link className="link" to={`/singleProduct/${id}`}>
                  <img className="product-img" src={image} alt={title} />
                  <h2 className="item-title">{title}</h2>
                </Link>
              </article>
            );
          })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
