import Counter from "./Counter"
import { Container, Row, Col } from "react-bootstrap"

const ItemDetail = ({product}) =>{
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <img src={`../${product.img}`} alt="" className="imgDetail" />
                </Col>
                <Col>
                    <h1 className="productTitle">{product.name}</h1>
                    <h2 className="productDescription-title">Descripción</h2>
                    <p className="productDescription">{product.description}</p>
                    <h2 className="productDescription-title">Precio</h2>
                    <p className="productPrice">${product.price}</p>
                    <h2 className="productDescription-title">Stock</h2>
                    <p className="productPrice">{product.stock} unidades</p>
                    <h2 className="productDescription-title">Cantidad</h2>
                    
                    <Counter initial={1} stock={product.stock}/>
                    <br />
                    <button className="btnAgregarAlCarrito"><span className="textCarrito">Agregar carrito</span></button>
                </Col>
                
            </Row>
            
        </Container>

            
        
    )
}

export default ItemDetail