const products=[
    {
        id:'1',
        name:'Kong',
        price:'100',
        category:'juguetes',
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
        category:'juguetes',
        img:'https://http2.mlstatic.com/D_NQ_NP_943851-MLU41917707576_052020-O.webp',
        stock:'20',
        description:'descripcion mordillo'
    },
    {id:'4', name:'Alimento N&D', price:'1500', category:'Alimento', img:'https://http2.mlstatic.com/D_NQ_NP_673421-MLA43969582441_112020-O.webp',stock:'1',description:'Alimento para perros N&D'},
    
    {id:'5', name:'Alimento Equilibrio', price:'1200', category:'Alimento', img:'https://http2.mlstatic.com/D_NQ_NP_909746-MLU72566346648_112023-O.webp',stock:'2',description:'Alimento para perros Quilibrio'},
    {id:'6', name:'Alimento N&D', price:'1500', category:'Alimento', img:'https://http2.mlstatic.com/D_NQ_NP_673421-MLA43969582441_112020-O.webp',stock:'1',description:'Alimento para perros N&D'},
    
    {id:'7', name:'Alimento Equilibrio', price:'1200', category:'Alimento', img:'https://http2.mlstatic.com/D_NQ_NP_909746-MLU72566346648_112023-O.webp',stock:'2',description:'Alimento para perros Quilibrio'},

]

export const getProducts =() => {
    return new Promise((resolve, reject) =>{

        if (products.length > 0){
          
            setTimeout(() => {
                resolve(products);
            },2000);
        } else {
            reject("no hay productos");
        }
    });
};

export const getProduct =(id) =>{
    return new Promise((resolve, reject) =>{
        if(products.length > 0 ){         
            const product  = products.find((prod) =>prod.id == id);
            console.log(product);
            setTimeout(() =>{
                if(!product){
                    reject(`no se encontro el producto con el id ${id}`);
                } else {
                    resolve(product);
                }
            },2000);
        } else {
            reject("no hay productos");
        }
    });
};



export const getProductsByCategory =(categoryId) =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products.filter(prod => prod.category === categoryId))
        },500)
    } )
}

