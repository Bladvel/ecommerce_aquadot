import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../services/firebase'


const ItemDetailContainer = () =>{

    const [product, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    

    useEffect(() => {
        setLoading(true)

        // getProductById(productId).then(res => {
        //     setProducts(res)
        // }).catch(error => {
        //     console.log(error)
        // }).finally(() => {
        //     setLoading(false)
        // })
        
        const docRef = doc(db, 'products', productId)
        
        getDoc(docRef).then(doc => {
            const productFormatted = { id: doc.id, ...doc.data() }
            setProducts(productFormatted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        
    }, [productId])

    if(loading) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
            </div> 
        ) 
    }

    return(
        <>
            <ItemDetail {...product}/>
        </>
        
    )
}

export default ItemDetailContainer