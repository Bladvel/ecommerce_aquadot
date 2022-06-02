import { Card, Button } from "react-bootstrap"

const Item = ({name, price, img, description}) => {

    return(
        <Card style={{ width: '16.5rem' }} className="m-2">
        {/* <Card.Img variant="top" src={placeholderImage} /> */}
        {console.log(img)}
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title className="text-start">{name}</Card.Title>
            <Card.Subtitle className=" text-start mb-2 text-muted">{price}$ </Card.Subtitle>
            <Card.Text className="text-start">
                {description}
            </Card.Text>
            <Button variant="primary">Ver mas detalles</Button>
        </Card.Body>
        </Card>
    )
}

export default Item