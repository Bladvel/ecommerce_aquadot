import { useState, useEffect } from "react"
import { getProducts } from "../asyncMock"
import ItemList from "./ItemList"

const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() =>{
        getProducts().then(res =>{
            setProducts(res)
        })
    }, [])
    
    return(
        <>
            <h1>Hola! Aqui se veran los items de la tienda</h1>
            <ItemList products={products}/>
        </>
        
    )
}

export default ItemListContainer