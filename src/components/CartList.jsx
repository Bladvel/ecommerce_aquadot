import CartItem from "./CartItem"
import { Container, Row } from "react-bootstrap"

const CartList = ({products}) =>{

    return(
        <Container>
            
            {products.map(product => {
                return(
                    <Row>
                        <CartItem key={product.id} {...product} />
                    </Row>
                )
                
            } )}   
        </Container>
        
    )

}

export default CartList