import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useData } from '../../contexts/contexts'
import './SingleProduct.css'
const SingleProduct = () => {
    const {id} = useParams();
    const {data,blackText} = useData(); 
    const singleUser = data.find((user)=>{
        return user.id === +id ;
    })

    return (
    <article >
        <div className='product-img'>
        <img src={singleUser.image} alt={singleUser.title} />
        </div>
        <div className='product-title'>
        <h2 style={{color:blackText}} >{singleUser.title}</h2>
        <strong style={{color:blackText}} >{singleUser.price}$</strong>
        <p style={{color:blackText}} >{singleUser.description}</p>
        <span style={{color:blackText}} >{singleUser.category}</span>
        <div className='back-blog'>
        <Link className='back' to='/'>back</Link>
        </div>
        </div>
    </article>
  )
}

export default SingleProduct;