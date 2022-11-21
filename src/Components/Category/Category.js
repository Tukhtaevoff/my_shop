import React from 'react'
import './Category.css';
const Category = ({categories,filteredArr}) => {
  return (
    <section className='categories'>
        <div className='categories-container'>
        {
        categories.map((category, index) => {
                  return (
                    <button key={index} className='category__btn' onClick={() => filteredArr(category)}>
                        {category}
                    </button>
                  )
                }
            )
        }
        </div>
    </section>
  )
}

export default Category;