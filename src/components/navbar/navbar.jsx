
import CartWitdget from "../cartwidget/cartwidget";
import logotaba from "/logotaba.png";
import {NavLink, useNavigete } from "react-router-dom";
import "./navbar.css";



const Navbar = () => {
    const navigate = useNavigete ()

  
    return (
        <div className="navbar-container">
            <div className="navbar-logo-container">
                <img onClick={()=> navigate('/')} src={logotaba} alt="Logo" className="navbar-logo" />
                <h2 onClick={()=> navigate('/')} >Taba Viajes</h2>
            </div>
            <div className="navbar-buttons">
                 <NavLink to='/category/electronics'className="navbar-button" >Categorias</NavLink>
                 <NavLink to='/category/jewelery' className= "navbar-button">Contactos</NavLink>
                
            </div>
            <div className="navbar-cart-container">
                <CartWitdget className="navbar-cart" />
            </div>
        </div>
    );
};

export default Navbar;