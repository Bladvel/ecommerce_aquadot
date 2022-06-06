import Counter from "./Counter"

const ItemDetail = ({product}) =>{
    return (
        <>
            <h2>{product.name}</h2>
            <h2>${product.price}</h2>
            <h2>Stock: {product.stock}</h2>
            <h2>{product.description}</h2>
            <img src={`../${product.img}`} alt="" />
            <Counter initial={1} stock={product.stoc}/>
        </>
        
    )
}

export default ItemDetail