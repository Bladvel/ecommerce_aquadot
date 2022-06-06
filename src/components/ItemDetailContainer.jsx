import { useState, useEffect } from "react"
import { getProducts, getProductById } from "../asyncMock"
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
        return <h1>Cargando...</h1>
    }

    return(
        <>
            <h1>Product detail</h1>
            <ItemDetail product={product}/>
        </>
        
    )
}

export default ItemDetailContainer