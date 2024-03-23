const products=[
    {
        id:'1',
        name:'Kong',
        price:'100',
        category:'Juguetes',
        img:'https://http2.mlstatic.com/D_NQ_NP_808387-MLU48678912704_122021-O.webp',
        stock:'25',
        description:'descripcion pelotita'
    },
    {
        id:'2',
        name:'pretal',
        price:'500',
        category:'Pretales',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBaTOY5BFQD64hEJFxlDvDHHb0HAT64OrK_g&s',
        stock:'10',
        description:'descripcion Pretal'
    },
    {
        id:'3',
        name:'mordillo',
        price:'200',
        category:'Juguetes',
        img:'https://http2.mlstatic.com/D_NQ_NP_943851-MLU41917707576_052020-O.webp',
        stock:'20',
        description:'descripcion mordillo'
    },
]

export const getProducts =() => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById =(productId) =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productId))
        },500)
    } )
}

export const getProductByCategory =(category) =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products.find(prod => prod.category === category))
        },500)
    } )
}