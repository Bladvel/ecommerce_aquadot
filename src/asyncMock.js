const products =[
    {
        id: '1',
        name: 'Taza de ceramica',
        price: 5,
        category: 'Tazas',
        img: 'images/placeholder-img.png',
        stock: 100,
        description: 'Descripcion de Taza de ceramica'
    },
    {
        id: '2',
        name: 'Vaso de cafe',
        price: 3,
        category: 'Vasos',
        img: 'images/placeholder-img.png',
        stock: 100,
        description: 'Descripcion de vaso de cafe'
    },
    {
        id: '3',
        name: 'Cuaderno tapa dura mediano',
        price: 6,
        category: 'Cuadernos',
        img: 'images/placeholder-img.png',
        stock:100,
        description: 'Descripcion de cuaderno tapa dura mediano'
    },
    {
        id: '4',
        name: 'Lapicero Plastico',
        price: 2,
        category: 'Lapiceros',
        img: 'images/placeholder-img.png',
        stock:100,
        description: 'Descripcion de lapicero plastico'
    },
    {
        id: '5',
        name: 'Mousepad de microfibra',
        price: 4,
        category: 'Mousepads',
        img: 'images/placeholder-img.png',
        stock:100,
        description: 'Descripcion de mousepad de microfibra'
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}