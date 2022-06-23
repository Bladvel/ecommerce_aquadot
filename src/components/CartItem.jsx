import { Col } from "react-bootstrap"
import { useContext } from "react"
import CartContext from "../context/CartContext"

const CartItem = ({id, name, price,img, quantity}) =>{

    const {removeItem} = useContext(CartContext)
    const handleRemove = (id) =>{
        removeItem(id)
    }

    return(
            <>
                <Col className="w-auto">
                    <img src={`../${img}`} alt="" className="cartImgDetail" />
                </Col>
                <Col>
                    <p className="cartItem-title text-start">{name}</p>
                    <p className="cartItem-detail">Precio: ${price} </p>
                    <p className="cartItem-detail">Cantidad: {quantity} </p>
                    <p className="cartItem-detail">Subtotal: ${price*quantity} </p>
                    
                </Col>
                <Col className="text-end">
                    <button className="btn btn-danger" onClick={() => handleRemove(id)}>Eliminar</button>
                </Col>
            </>
    )
            
    

}
export default CartItem