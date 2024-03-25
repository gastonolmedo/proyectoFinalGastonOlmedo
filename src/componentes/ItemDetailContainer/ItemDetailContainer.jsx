import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'

import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebaseConfig'

const ItemDetailContainer =() =>{
    const [item , setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true); 
    const { id } = useParams()


    const getProductDB = (id) => {
        const productRef = doc( db, "products", id );
        getDoc(productRef)
            .then( response => {
                const product ={
                    id: response.id,
                    ...response.data()
                }
            setItem(product);
            setIsLoading(false);
            })
    }
    useEffect(()=>{
        setIsLoading(true);
        getProductDB(id);
           
    },[])
    
    return(
        <>
        { isLoading ? <h2>Cargando Detalle .....</h2> : <ItemDetail {...item} />}
        </>
      
    )
}
export default ItemDetailContainer









