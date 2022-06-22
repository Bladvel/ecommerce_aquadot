import { Col } from "react-bootstrap"
import { useContext } from "react"
import CartContext from "../context/CartContext"

const CartItem = ({id, name, price, quantity}) =>{

    const {removeItem} = useContext(CartContext)
    const handleRemove = (id) =>{
        removeItem(id)
    }

    return(
            <Col>
                <span>Producto: {name} </span>
                <span>Cantidad: {quantity} </span>
                <span>Precio unitario: ${price} </span>
                <span>Subtotal: ${price*quantity} </span>
                <button className="btn btn-danger" onClick={() => handleRemove(id)}>Eliminar</button>
            </Col>
    )
    

}
export default CartItem