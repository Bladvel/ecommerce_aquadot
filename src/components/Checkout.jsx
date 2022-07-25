import { Container, Row, Col } from "react-bootstrap"
import { useState, useContext } from "react"
import CartContext from "../context/CartContext"
import { addDoc, collection, writeBatch, getDocs, query, where, documentId } from 'firebase/firestore'
import { db } from '../services/firebase/index'
import { Link } from "react-router-dom"

const Checkout = ()=>{
    
    const [loading, setLoading] = useState(false)
    const {cart, totalQuantity, totalPrice, clear} = useContext(CartContext)

    if(totalQuantity === 0)
        return (
            <>
                <h1>Compra Finalizada</h1>
                <Link to='/ecommerce_aquadot'>Volver al inicio</Link>
            </>
        )

    const handleSubmit = (e)=>{
        e.preventDefault()

        setLoading(true)

        const objOrder = {
            buyer: {
                name: e.target.name.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                address: e.target.address.value
            },
            items: cart,
            total: totalPrice
        }

        const batch = writeBatch(db)

        const ids = cart.map(prod => prod.id)

        const outOfStock = []

        const collectionRef = collection(db, 'products')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()

                    const prod = cart.find(prod => prod.id === doc.id)
                    const prodQuantity = prod.quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc})
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(db, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ type: 'out_of_stock', products: outOfStock })
                }
            }).then(({ id }) => {
                batch.commit()
                clear()
                alert(`Su orden se genero correctamente. El id de su orden es: ${id}`)
            }).catch(error => {
                if(error.type === 'out_of_stock') {
                    alert('Hay productos que no tienen stock')
                } else {
                    console.log(error)
                }
            }).finally(() => {
                setLoading(false)
            })

        




    }

    if(loading) {
        return (
            <div className="loader-container">
                <div class="loader"></div>
            </div> 
        ) 
    }
    
    return(
        <Container >
            <Row className="text-start">
                <Col>
                    <form onSubmit={handleSubmit}>
                        <h3>Ingrese sus datos para continuar con la compra</h3>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input type="string" className="form-control" id="name" name="name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Telefono</label>
                            <input type="number" className="form-control" id="phone" name="phone"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Direccion</label>
                            <input type="string" className="form-control" id="address" name="address"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </Col>
            </Row>
            
        </Container>
        
    )


}

export default Checkout