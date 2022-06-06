import { Card } from "react-bootstrap"
import '../styles/styles.css'
import { Link, useParams } from "react-router-dom"

const Item = ({id, name, price, img, description}) => {
    
    const { categoryId } = useParams()

    if(!categoryId){
      return(
            <Card style={{ width: '16.5rem' }} className="m-2">
            {/* <Card.Img variant="top" src={placeholderImage} /> */}
            {console.log(img)}
            <Card.Img variant="top" src={img} className="imgCard" />
            <Card.Body>
                <Card.Title className="text-start">{name}</Card.Title>
                <Card.Subtitle className=" text-start mb-2 text-muted">${price} </Card.Subtitle>
                <Card.Text className="text-start">
                    {description}
                </Card.Text>

                <Link to={`/detail/${id}`} className="btn btn-primary">
                    Ver mas detalles
                </Link>
    
            </Card.Body>
            </Card>
        )  
    }else{
        return(
            <Card style={{ width: '16.5rem' }} className="m-2">
            {/* <Card.Img variant="top" src={placeholderImage} /> */}
            {console.log(img)}
            <Card.Img variant="top" src={`../${img}`} className="imgCard" />
            <Card.Body >
                <Card.Title className="text-start">{name}</Card.Title>
                <Card.Subtitle className=" text-start mb-2 text-muted">${price} </Card.Subtitle>
                <Card.Text className="text-start">
                    {description}
                </Card.Text>
                <Link to={`/detail/${id}`} className="btn btn-primary">
                    Ver mas detalles
                </Link>
            </Card.Body>
            </Card>
        )
    }
    
}

export default Item