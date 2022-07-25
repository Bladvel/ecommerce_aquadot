import { useContext } from "react"
import CartContext from "../context/CartContext"
import { Link } from "react-router-dom"
import CartList from "./CartList"
import { Container, Row, Col } from "react-bootstrap"

const Cart = () =>{
    
    const {cart,totalQuantity, totalPrice, clear} = useContext(CartContext)


    if(totalQuantity === 0)
        return (
            <>
                <h1>El carrito esta vacio</h1>
                <Link to='/ecommerce_aquadot'>Volver al inicio</Link>
            </>
        )

    return (
        <>
            <h1 className="cartTitle m-5">Carrito de compras</h1>
            <CartList products={cart}/>
            <Container>
                <Row>
                    <Col className="cartDetail-name">
                        <span>Cantidad de productos:</span>  
                    </Col>
                    <Col className="cartDetail-value">
                        <span>{totalQuantity}</span>
                    </Col>
                </Row>
                <Row>
                    <Col className="cartDetail-name">
                        <span>Total:</span>  
                    </Col>
                    <Col className="cartDetail-value">
                        <span>${totalPrice}</span>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <Link to='/ecommerce_aquadot/Checkout' className="btn btn-primary m-3"> Checkout</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button className="btn btn-secondary" onClick={clear}>Vaciar Carrito</button>
                    </Col>
                </Row>
            </Container>

            
        </>
    )
}

export default Cart