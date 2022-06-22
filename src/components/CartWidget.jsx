import cart_widget from '../cart.svg'
import CartContext from '../context/CartContext'
import { useContext } from 'react'

const CartWidget = () =>{

    const {totalQuantity} = useContext(CartContext)
    
    if(totalQuantity === 0) return
    
    return (
        <div>
            <img src={cart_widget} alt="shopping cart" />
            <span className='mx-1'>{totalQuantity}</span>
        </div>
    )    

}

export default CartWidget