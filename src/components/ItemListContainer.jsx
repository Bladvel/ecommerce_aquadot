import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../asyncMock"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect(() => {
        setLoading(true)

        if(!categoryId) {
            getProducts().then(res => {
                setProducts(res)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            getProductsByCategory(categoryId).then(res => {
                setProducts(res)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        }
        
    }, [categoryId])

    if(loading) {
        return (
            <div class="loader"></div>
        ) 
    }
    
    return(
        <>
            <ItemList products={products}/>
        </>
        
    )
}

export default ItemListContainer