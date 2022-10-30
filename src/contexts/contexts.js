import { useState, useEffect, useContext} from 'react';
import React, { createContext } from 'react';

export const AppContext = createContext();
let url = 'https://fakestoreapi.com/products';
const Contexts = ({children})=>{
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch(url)
            .then((res)=> res.json())
            .then((data)=> setData(data))
    },[]) 

    if(!data){
        return []
    }
     
    return (
    <AppContext.Provider value={{data,setData}}>
        {children}
    </AppContext.Provider>   
    )
}
export const useData = ()=>{
    return  useContext(AppContext);
}

export default Contexts;