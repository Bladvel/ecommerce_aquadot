import { useState, useEffect } from "react"
import { getProducts } from "../asyncMock"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect(() => {
        setLoading(true)

        getProducts(categoryId).then(res => {
            setProducts(res)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    
        
    }, [categoryId])

    if(loading) {
        return (
            <div className="loader-container">
                <div class="loader"></div>
            </div> 
        ) 
    }
    
    return(
        <>
            <ItemList products={products}/>
        </>
        
    )
}

export default ItemListContainer