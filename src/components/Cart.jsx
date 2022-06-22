import { useContext } from "react"
import CartContext from "../context/CartContext"
import { Link } from "react-router-dom"
import CartList from "./CartList"

const Cart = () =>{
const {cart,totalQuantity, totalPrice, clear} = useContext(CartContext)

    if(totalQuantity === 0)
        return (
            <>
                <h1>El carrito esta vacio</h1>
                <Link to='/'>Volver al inicio</Link>
            </>
        )

    return (
        <>
            <h1>CART</h1>
            <CartList products={cart}/>
            
            <h2>Cantidad de productos: {totalQuantity}</h2>
            <h2>Total: ${totalPrice}</h2>
            <button className="btn btn-primary m-3" >Crear Orden</button>
            <br />
            <button className="btn btn-secondary" onClick={clear}>Vaciar Carrito</button>
        </>
    )
}

export default Cart