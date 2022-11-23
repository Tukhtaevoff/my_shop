import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../contexts/contexts";
import Categories from "../Categories/Categories";
import SearchForm from "../SearchForm/SearchForm";
import { useState } from "react";

import "./Products.css";

const Products = () => {
  const { isData, color, setIsData } = useData();

  const AllItems = ["All", ...new Set(isData.map((item) => item.category))];

  // const [products, setProducts] = useState(isData);
  const [categories, setCategory] = useState(AllItems);

  const filteredArr = (category) => {
    if (category === "All") {
      setIsData(isData);
      return;
    }

    const filteredNewProducts = isData.filter(
      (product) => product.category === category
    );

    setIsData(filteredNewProducts);
  };

  return (
    <main>
      <SearchForm />
      <Categories categories={categories} filteredArr={filteredArr} />
      <marquee scrollamount="20" style={{color, borderBottom: "3px dashed #ddd", borderTop: "3px dashed #ddd", margin: "30px 0 60px 0"}} behavior="scroll" direction="right">
        <h1 className="title" style={{padding: "20px", margin: "0"}}>- - - -  Our products  - - - -</h1>
      </marquee>
      <section id="products" className="products">
        <div className="products__container">
          <div className="products-blog">
            {isData.map((product) => {
              const { title, id, image } = product;
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
