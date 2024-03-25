import { useContext } from 'react'
import carrito from '../../assets/carrito.png'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
const CardWidget =() =>{
    const { totalItems } = useContext(CartContext)

    return(
        <>
        <Link to="/cart" className='CartWidget' >
            <img src={carrito} className='logo'></img>
           
            { totalItems } 
        </Link>
        </>
      
    )
}
export default CardWidget