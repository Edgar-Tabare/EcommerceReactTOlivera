import { Button } from "antd";
import CartWitdget from "../cartwidget/cartwidget";
import logotaba from "../../../public/logotaba.png";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-logo-container">
                <img src={logotaba} alt="Logo" className="navbar-logo" />
                <h2>Taba Viajes</h2>
            </div>
            <div className="navbar-buttons">
                <Button className="navbar-button">Home</Button>
                <Button className="navbar-button">Categorias</Button>
                <Button className="navbar-button">Contactos</Button>
            </div>
            <div className="navbar-cart-container">
                <CartWitdget className="navbar-cart" />
            </div>
        </div>
    );
};

export default Navbar;