import Item from "./Item"
import { Container, Row } from "react-bootstrap"

const ItemList = ({products}) => {
    return(
        <Container>
            <Row>
                {products.map(product => <Item key={product.id} {...product} /> )}
            </Row>
        </Container>  
    )
}

export default ItemList