import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useData } from '../../contexts/contexts'
import './SingleProduct.css'
const SingleProduct = () => {
    const {id} = useParams();
    const {data} = useData(); 
    const singleUser = data.find((user)=>{
        return user.id === +id ;
    })

    return (
    <article >
        <div className='product-img'>
        <img src={singleUser.image} alt={singleUser.title} />
        </div>
        <div className='product-title'>
        <h2>{singleUser.title}</h2>
        <strong>{singleUser.price}$</strong>
        <p>{singleUser.description}</p>
        <span>{singleUser.category}</span>
        <div className='back-blog'>
        <Link className='back' to='/'>back</Link>
        </div>
        </div>
    </article>
  )
}

export default SingleProduct;