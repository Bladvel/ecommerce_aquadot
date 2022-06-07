import Counter from "./Counter"
import { Container, Row, Col } from "react-bootstrap"

const ItemDetail = ({product}) =>{
    return (
        <Container>
            <Row>
                <Col>
                    <img src={`../${product.img}`} alt="" className="imgDetail" />
                </Col>
                <Col>
                    <h1 className="productTitle">{product.name}</h1>
                    <h2 className="productDescription-title">Descripcion</h2>
                    <h2>${product.price}</h2>
                    <h2>Stock: {product.stock}</h2>
                    {product.description}
                    
                    <Counter initial={1} stock={product.stock}/>
                    <br />
                    <button>Agregar carrito</button>
                </Col>
                
            </Row>
            
        </Container>

            
        
    )
}

export default ItemDetail