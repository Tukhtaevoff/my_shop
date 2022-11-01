import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../contexts/contexts";
import SearchForm from "../SearchForm/SearchForm";
import "./Products.css";

const Products = () => {
  const { isData } = useData();

  return (
    <main>
      <section>
        <SearchForm />
      </section>
      <section id="products" className="products">
        <div className="products__container">
          <h1 className="title">Our products</h1>
          <div className="products-blog">
            {isData.map((item) => {
              const { title, id, image } = item;
              return (
                <Link className="link item" to={`/singleProduct/${id}`}>
                  <article key={id}>
                    <div className="img-blog">
                      <img className="product-img" src={image} alt={title} />
                    </div>
                    <h2 className="item-title">{title}</h2>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
