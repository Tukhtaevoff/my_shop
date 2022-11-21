import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../contexts/contexts';
import "./Products.css";
import SearchForm from '../SearchForm/SearchForm';
import Category from '../Category/Category';
const Products = () => {
  const {data, setData} = useData();
  // if(data.length < 1){
  //   return(
  //     <div>
  //       <h1 className='title'>no product found try again later</h1>
  //     </div>  
  //   )
  // }

  const AllCategories = ['All' , ...new Set(data.map(category => category.category))]
  const [categories,setCatery] = useState(AllCategories)
  const filteredArr = (category)=>{
      if(category === 'All'){
          setData(data);
          return;
      }

      const filteredNewProducts = data.filter((product) => product.category === category)
      setData(filteredNewProducts)
  }

  return (
    <>
    <main>
      <SearchForm/>
      <Category categories={categories} filteredArr={filteredArr}/>
      <section className='products'>
        <div className='products__container'>
        <h1 className='title' >our products</h1>
        <div className='products-blog'>
        {data.map((item)=>{
          console.log(item);
          const { category , price , title , id , description ,  image } = item;
          return (
            <Link className='link item' to={`/singleProduct/${id}`} >
            <article className='product-article' key={id} >
              <div className='img-blog'>
              <img className='product-img' src={image} alt={title} />
              </div>
              <h2 className='item-title'>{title}</h2>
              {/* <strong>{price}$</strong> */}
              {/* <p>{description}</p> */}
              {/* <span>{category}</span> */}
            </article>
            </Link>
          )
        })}
        </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default Products