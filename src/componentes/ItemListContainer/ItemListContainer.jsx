import { useState, useEffect } from "react"
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"

const ItemListContainer =({ greeting }) =>{
    const [products, setProducts] = useState([])
     const { categoryId } = useParams()

     useEffect(() => {
       const asyncFunc = categoryId ? getProductsByCategory : getProducts
         asyncFunc(categoryId)
            getProducts()
             .then(response =>{
                 setProducts(response)
             })
             .catch(error =>{
                 console.error(error)
             })
     },[])

    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}></ItemList>
        </div>
    )
}
export default ItemListContainer
