import { Link } from 'react-router-dom';
import '../components/components.styles.css'
import logo from '../imagem/logo.png'
import Cadastrar from "../views/Usuario/Cadastrar.js"

function irCadastrar() {
    return console.log('Foi')
}

function Menu() {
    return (
        <nav className="nav">
            <div>
                <img src={logo}></img>
            </div>
            <div className="div_cadastrar">
                <button onClick={irCadastrar}>Cadastrar</button>
            </div>
        </nav>
    );
}

export default Menu;