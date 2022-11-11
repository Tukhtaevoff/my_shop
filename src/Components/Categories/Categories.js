import React from "react";
import "./Categories.css";

const Categories = ({ categories, filteredArr }) => {
  return (
    <section>
      <div className="categories__container">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              className="category__btn"
              key={index}
              onClick={() => filteredArr(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
