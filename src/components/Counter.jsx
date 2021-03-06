import { useState } from 'react'
import plusSign from '../plus.svg'
import minusSign from '../minus.svg'


const Counter = ({initial, stock, onAdd}) =>{
    const [count, setCount] = useState(initial)

    const decrement = () => {
        count > 0 && setCount(prev => prev - 1)
    }

    const increment = () => {
        count < stock && setCount(count + 1)
    }

    return(
        <>
            <div className='counterContainer'>
                <button onClick={decrement} className="btnCounter btnCounteLeft"><img src={minusSign} alt="minus sign" className='btnContentMinus minusSign'/></button>
                    <span className='text-regular'>{count}</span>
                <button onClick={increment} className="btnCounter btnCounteRight "><img src={plusSign} alt="plus sign" className='btnContentPlus plusSign'/></button>
            </div>
            <br />
            <button className="btnAgregarAlCarrito" onClick={() => onAdd(count)}><span className="textCarrito">Agregar carrito</span></button>
        </>
        
  
    )

}

export default Counter