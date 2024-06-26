import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, name, img, price, stock})=> {
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
                <p className="Info">
                    Precio: ${price}    
                </p> 
                <p className="Info">
                    stock disponible:{stock}
                </p>   
            </section>
            <footer className="ItemFooter">
                 {/* <Link to='/Item/${id}' > Ver Detalle </Link>  */}
                 <Link to={`/item/${id}`} className='Option'>Ver Detalle</Link>
               
            </footer>
        </article>

    )
}
export default Item