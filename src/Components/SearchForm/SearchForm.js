import React, { useEffect, useRef } from "react";
import { useData } from "../../contexts/contexts";
import "./SearchForm.css";

const SearchForm = () => {
  const { setSearchItem } = useData();
  const searchValue = useRef("");

  const onChangeCase = (evt) => {
    setSearchItem(evt.target.value);
  };

  useEffect(() => {
    setSearchItem(searchValue.current.focus());
  }, []);

  const productSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <section>
      <div className="search-container">
        <form className="search-form" action="#" onSubmit={productSubmit}>
          <input
            className="search"
            ref={searchValue}
            name="search"
            onChange={onChangeCase}
            type="search"
            autoComplete="off"
            placeholder="Search..."
          />
          <button type="submit" className="search-btn">
            <i class="fa-solid fa-magnifying-glass"></i>  
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
