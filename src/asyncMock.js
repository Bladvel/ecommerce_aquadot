const products =[
    {
        id: '1',
        name: 'Taza de ceramica',
        price: 5,
        category: 'Tazas',
        img: 'images/mug.png',
        stock: 100,
        description: 'Descripcion de Taza de ceramica'
    },
    {
        id: '2',
        name: 'Vaso de vino',
        price: 3,
        category: 'Vasos',
        img: 'images/cup.png',
        stock: 100,
        description: "Vaso térmico de 6oz. Excelente para mantener frío el tequila, vino blanco o tinto y la champaña en lugares exteriores.\n Material: hecho con material 304 acero inoxidable y la tapa de ABS, fácil de limpiar con agua. Múltiples usos: el vaso de doble insulación se puede utilizar como vaso para vino, champaña y tequila."
    },
    {
        id: '3',
        name: 'Cuaderno tapa dura mediano',
        price: 6,
        category: 'Cuadernos',
        img: 'images/notebook.png',
        stock:100,
        description: 'Descripcion de cuaderno tapa dura mediano'
    },
    {
        id: '4',
        name: 'Lapicero Plastico',
        price: 2,
        category: 'Lapiceros',
        img: 'images/pen.png',
        stock:100,
        description: 'Descripcion de lapicero plastico'
    },
    {
        id: '5',
        name: 'Mousepad de microfibra',
        price: 4,
        category: 'Mousepads',
        img: 'images/mousepad.png',
        stock:100,
        description: 'Descripcion de mousepad de microfibra'
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}