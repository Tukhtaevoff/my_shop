import React from 'react'
import { useRef } from 'react';
import { useData } from '../../contexts/contexts';
import './SearchForm.css';
const SearchForm = () => {
    const {searchItem , setSearchItem , data} = useData(); 
    const searchValue = useRef(''); 
    const searchVal = searchValue.current.value                      
    console.log(searchVal);                                                                                    
    function productSubmit (e){
        e.preventDefault();
        const filterData = data.filter(item=>item.title.includes(searchVal))
        setSearchItem(filterData)
    }
  return (
    <section>
        <div className='search-container'>
        <form className='search-form' onSubmit={productSubmit}>
            <input 
             className='search'
             type='text'
             autoComplete='off' 
             ref={searchValue} 
             placeholder='Search...'/>
            <button type='submit' className='search-btn'>search</button>
        </form>
        </div>
    </section>
  )
}

export default SearchForm;