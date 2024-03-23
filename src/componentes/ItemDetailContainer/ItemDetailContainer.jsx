import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
//import { useParams } from 'react-router-dom'

const ItemDetailContainer =() =>{
    const [product, setProduct] = useState(null)
   // const { Id } = useParams()
    useEffect(()=>{
        getProductById('1')
            .then(response =>{
                setProduct(response)
            })
            .catch(error =>{
                console.error(error)
            })
    },[])
    
    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}
export default ItemDetailContainer