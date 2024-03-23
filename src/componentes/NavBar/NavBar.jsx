import CardWidget from "../CartWidget/CartWidget"
import logo from "../../assets/logo.png"
import '../../estilos/NavBar.css'
import { Link } from "react-router-dom"
//import { Link } from "react-router-dom"

const NavBar =() =>{

    
        return(
            <nav className="navbar">
                <a href='/'>
                <img className="logo" src={logo} /> 
                </a>
                <div>                
                <Link to='/ItemListContainer'>Todos</Link>
                <Link to='/ItemListContainer/juguetes'>Juguetes</Link>
                
                </div>

                   
            
                <CardWidget />
            </nav>
        )
    }

export default NavBar


