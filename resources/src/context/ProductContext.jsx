import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([]);

    // https://foods-api-4ids.onrender.com/foodsApi
    useEffect(() => {
        const comingData = async () => {
            const fetchData = await axios.get("https://mocki.io/v1/d453ab3a-aec9-48de-9d6c-6e186cabbe9d");
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