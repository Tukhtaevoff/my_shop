import { useState, useEffect, useContext} from 'react';
import React, { createContext } from 'react';

export const AppContext = createContext();
let url = 'https://fakestoreapi.com/products';

const Context = ({ children }) => {

    const [isData, setIsData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setIsData(data))
    }, [])

    if (!isData) {
        return []
    }

    return (
        <AppContext.Provider value={{isData, setIsData}}>
            {children}
        </AppContext.Provider>
    )
}

export default Context;

export const useData = () => {
    return useContext(AppContext);
}

export {Context};