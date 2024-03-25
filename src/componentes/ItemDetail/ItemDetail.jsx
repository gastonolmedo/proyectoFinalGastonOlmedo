import { useContext, useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'


const ItemDetail =({id,name, img, description, price, stock}) =>{
    const[quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)
    
    const handleonAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item ={
            id, price, name
        }
        addItem(item, quantity)
    }
    
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture className='ItemPicture'>
                <img src={img} alt={name} className="ItemImg"></img>
            </picture>
            <section>
                <p className='Info'>
                    Descripcion:{description}
                </p>
                <p className="Info">
                    Precio: ${price}    
                </p> 
                <p className="Info">
                    stock disponible:{stock}
                </p>   
            </section>
          
            <footer className='ItemFooter'>
                {/* {
                    quantityAdded > 0 ? (
                        <Link to='/Cart' className='Option'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleonAdd}></ItemCount>
                    )
                } */}
                 <ItemCount initial={1} stock={stock} onAdd={handleonAdd}></ItemCount>
             
            </footer>
        </article>
    )
}
export default ItemDetail