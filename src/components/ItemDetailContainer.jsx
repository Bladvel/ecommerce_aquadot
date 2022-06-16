import { useState, useEffect } from "react"
import {getProductById } from "../asyncMock"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () =>{

    const [product, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    

    useEffect(() => {
        setLoading(true)
            getProductById(productId).then(res => {
                setProducts(res)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        
        
    }, [productId])

    if(loading) {
        return (
            <div class="loader"></div>
        ) 
    }

    return(
        <>
            <ItemDetail {...product}/>
        </>
        
    )
}

export default ItemDetailContainer