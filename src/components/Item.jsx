import { Card } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"

const Item = ({id, name, price, img}) => {
    
    const { categoryId } = useParams()

    if(!categoryId){
      return(
            <Card style={{ width: '16.5rem' }} className="m-2">
            
            <Card.Img variant="top" src={img} className="imgCard" />
            <Card.Body>
                <Card.Title className="text-start">{name}</Card.Title>
                <Card.Subtitle className=" text-start mb-2 text-muted">${price} </Card.Subtitle>

                <Link to={`/ecommerce_aquadot/detail/${id}`} className="btn btn-primary">
                    Ver mas detalles
                </Link>
    
            </Card.Body>
            </Card>
        )  
    }else{
        return(
            <Card style={{ width: '16.5rem' }} className="m-2">
            <Card.Img variant="top" src={img} className="imgCard" />
            <Card.Body >
                <Card.Title className="text-start">{name}</Card.Title>
                <Card.Subtitle className=" text-start mb-2 text-muted">${price} </Card.Subtitle>
                
                <Link to={`/ecommerce_aquadot/detail/${id}`} className="btn btn-primary">
                    Ver mas detalles
                </Link>
            </Card.Body>
            </Card>
        )
    }
    
}

export default Item