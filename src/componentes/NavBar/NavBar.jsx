import CardWidget from "../CartWidget/CartWidget"
import logo from "../../assets/logo.png"
import '../../estilos/NavBar.css'
import { Link } from "react-router-dom"
//import { Link } from "react-router-dom"

 const NavBar =() =>{

    
        return(
            <nav>
               
                <img className="logo" src={logo} /> 
                <Link to="/">
                    <button className="btn btn-outline-dark mx-2">Home</button>
                </Link>
                <Link to="/category/juguetes">
                    <button className="btn btn-outline-dark mx-2">Jueguetes</button>
                </Link>
                <Link to="/category/Pretales">
                    <button className="btn btn-outline-dark mx-2">Pretales y Correas</button>
                </Link>
                <Link to="/category/Alimento">
                    <button className="btn btn-outline-dark mx-2">Comida y Premios</button>
                </Link>
                <Link to="/cart">
                    <CardWidget></CardWidget>
                </Link>
                

                   
            
                <CardWidget />
            </nav>
        )
    }

export default NavBar


