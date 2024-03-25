import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const products=[
    {
        
        name:'Kong',
        price:'100',
        category:'juguetes',
        img:'https://http2.mlstatic.com/D_NQ_NP_808387-MLU48678912704_122021-O.webp',
        stock:'25',
        description:'descripcion pelotita'
    },
    {
        
        name:'pretal',
        price:'500',
        category:'Pretales',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBaTOY5BFQD64hEJFxlDvDHHb0HAT64OrK_g&s',
        stock:'10',
        description:'descripcion Pretal'
    },
    {
      
        name:'mordillo',
        price:'200',
        category:'juguetes',
        img:'https://http2.mlstatic.com/D_NQ_NP_943851-MLU41917707576_052020-O.webp',
        stock:'20',
        description:'descripcion mordillo'
    },
    {name:'Alimento N&D', price:'1500', category:'Alimento', img:'https://http2.mlstatic.com/D_NQ_NP_673421-MLA43969582441_112020-O.webp',stock:'1',description:'Alimento para perros N&D'},
    
    {name:'Alimento Equilibrio', price:'1200', category:'Alimento', img:'https://http2.mlstatic.com/D_NQ_NP_909746-MLU72566346648_112023-O.webp',stock:'2',description:'Alimento para perros Quilibrio'},
    {name:'Alimento N&D', price:'1500', category:'Alimento', img:'https://http2.mlstatic.com/D_NQ_NP_673421-MLA43969582441_112020-O.webp',stock:'1',description:'Alimento para perros N&D'},
    
    {name:'Alimento Equilibrio', price:'1200', category:'Alimento', img:'https://http2.mlstatic.com/D_NQ_NP_909746-MLU72566346648_112023-O.webp',stock:'2',description:'Alimento para perros Quilibrio'},

];

export const seedProducts = () => {
    products.forEach( product => {
        addDoc( collection(db, "products"), product)
    })


}
