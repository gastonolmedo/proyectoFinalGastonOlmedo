import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
//import { useState } from 'react'
//import { Link } from 'react-router-dom'


const ItemDetail =({id, name, img, category, description, price, stock}) =>{
    // const [quantityAdded, setQuantityAdded] = useState(0)

    // const handleonAdd = (quantity) => {
    //     setQuantityAdded(quantity)
    // }
    return(
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={description} className='ItemImg'></img>
            </picture>
            <section>
                <p className='Info'>
                    Categoria: {category}
                </p>
                <p className='Info'>
                    Descripcion: {description}
                </p>
                <p className='Info'>
                    Precio: ${price}
                </p>
            </section>
            <footer className='ItemFooter'>
                {/* {
                    quantityAdded > 0 ? (
                        <Link to='/CartWidget' className='Option'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleonAdd}></ItemCount>
                    )
                } */}
                <ItemCount initial={1} stock={stock} onAdd={(quantity) =>console.log('Cantidad agregada ', quantity)}></ItemCount>
            </footer>
        </article>
    )
}
export default ItemDetail