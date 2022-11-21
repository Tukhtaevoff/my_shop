import { useState, useEffect, useContext } from "react";
import React, { createContext } from "react";

export const AppContext = createContext();
let url = "https://fakestoreapi.com/products";

const Context = ({ children }) => {
  const [isData, setIsData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [headerBackground, setHeaderBackground] = useState("white");
  const [moon, setMoon] = useState(false);
  const [color, setColor] = useState("black");
  const [footerBackground, setFooterBackground] = useState("indigo");
  const [appBackground, setAppBackground] = useState("white");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setIsData(data));
  }, []);

  if (!isData) {
    return [];
  }

  return (
    <AppContext.Provider
      value={{
        appBackground,
        setAppBackground,
        footerBackground,
        setFooterBackground,
        color,
        setColor,
        moon,
        setMoon,
        headerBackground,
        setHeaderBackground,
        searchItem,
        setSearchItem,
        isData,
        setIsData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;

export const useData = () => {
  return useContext(AppContext);
};

export { Context };
