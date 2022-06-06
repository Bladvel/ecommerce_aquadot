import { useState } from 'react'

const Counter = ({initial, stock}) =>{
    const [count, setCount] = useState(initial)

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    const increment = () => {
        count < stock && setCount(count + 1)
    }

    return(
        <>
            <button onClick={decrement}>-</button>
                <h2>{count}</h2>
            <button onClick={increment}>+</button>
            
            <button>Agregar carrito</button>
        </>
    )

}

export default Counter