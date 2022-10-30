import React from 'react'
import { Link } from 'react-router-dom';
import { useData } from '../../contexts/contexts';
import "./Products.css"
const Products = () => {
  const {data} = useData();
  return (
    <>
    <main>
      <section className='products'>
        <div className='products__container'>
        <h1>our products</h1>
        <div className='products-blog'>
        {data.map((item)=>{
          console.log(item);
          const { category , price , title , id , description ,  image } = item;
          return (
            <article key={id} >
            <Link className='product' to={`/singleProduct/${id}`} >
              <img src={image} alt={title} />
              <h2>{title}</h2>
              {/* <strong>{price}$</strong> */}
              {/* <p>{description}</p> */}
              <span>{category}</span>
            </Link>
            </article>
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