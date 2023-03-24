import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([]);

    // https://foods-api-4ids.onrender.com/foodsApi
    // http://localhost:8080/foodsApi
    useEffect(() => {
        const comingData = async () => {
            const fetchData = await axios.get("https://foods-api-4ids.onrender.com/foodsApi");
            setProducts(fetchData.data);
        }
        comingData();
    }, [])

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}