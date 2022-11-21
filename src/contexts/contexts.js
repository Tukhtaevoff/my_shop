import { useState, useEffect, useContext} from 'react';
import React, { createContext } from 'react';
export const AppContext = createContext();
let url = 'https://fakestoreapi.com/products';
const Contexts = ({children})=>{
    const [data,setData] = useState([]);
    const [searchItem,setSearchItem] = useState('');
    const [headerBackground,setHeaderBackground] = useState('white')
    const [moon,setMoon] = useState(false)
    const [color,setColor] = useState('indigo')
    const [footerBackground,setFooterBackground] = useState('indigo')
    const [appBackground,setAppBackground] = useState('white')
    const [blueText,setBlueText] = useState('blue')
    const [blackText,setBlackText] = useState('black')
    useEffect(()=>{
        fetch(`${url}  ${searchItem}`)
            .then((res)=> res.json())
            .then((data)=> setData(data))
    },[searchItem]) 

    if(!data){
        return []
    }
     
    return (
    <AppContext.Provider value={{blackText,setBlackText,blueText,setBlueText,appBackground,setAppBackground,footerBackground,setFooterBackground,moon,setMoon,color,setColor,data,setData,searchItem,setSearchItem,headerBackground,setHeaderBackground}}>
        {children}
    </AppContext.Provider>   
    )
}
export const useData = ()=>{
    return  useContext(AppContext); 
}

export default Contexts;