import cart_widget from '../cart.svg'
import CartContext from '../context/CartContext'
import { useContext } from 'react'

const CartWidget = () =>{

    const {totalQuantity} = useContext(CartContext)
    return (
        <div>
            <img src={cart_widget} alt="shopping cart" />
            {totalQuantity}
        </div>
    )    

}

export default CartWidget