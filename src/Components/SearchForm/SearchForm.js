import React from "react";
import { useRef } from "react";
import { useData } from "../../contexts/contexts";
import "./SearchForm.css";

const SearchForm = () => {
  const { setSearchItem, isData } = useData();
  const searchRef = useRef('');
  const searchRefValue = searchRef.current.value;
  console.log(searchRefValue);

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const filteredArr = isData.filter((product) => product.title.includes(searchRefValue) || product.description.includes(searchRefValue))
    setSearchItem(filteredArr)

  }

  return (
    <section>
      <div className="search-container">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            ref={searchRef}
            className="search"
            name="search"
            type="text"
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
