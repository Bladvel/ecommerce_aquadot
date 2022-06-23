import Counter from "./Counter"
import { Container, Row, Col } from "react-bootstrap"
import CartContext from "../context/CartContext"
import { Link } from "react-router-dom"
import { useState, useContext } from "react"

const ItemDetail = ({id, name, price, img, stock, description}) =>{

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
       
        addItem({ id, name, price, img, quantity})
        setQuantityAdded(quantity)
    }


    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <img src={`../${img}`} alt="" className="imgDetail" />
                </Col>
                <Col>
                    <h1 className="productTitle">{name}</h1>
                    <h2 className="productDescription-title">Descripción</h2>
                    <p className="productDescription">{description}</p>
                    <h2 className="productDescription-title">Precio</h2>
                    <p className="productPrice">${price}</p>
                    <h2 className="productDescription-title">Stock</h2>
                    <p className="productPrice">{stock} unidades</p>
                    <h2 className="productDescription-title">Cantidad</h2>
                    { quantityAdded === 0 
                        ?   <Counter initial={1} stock={stock} onAdd={handleOnAdd}/>
                        :   <Link to='/cart'>Terminar compra</Link>
                    }
                    
                    
                </Col>
                
            </Row>
            
        </Container>

            
        
    )
}

export default ItemDetail