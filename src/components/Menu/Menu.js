import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../imagens/logo.png';
//import Cadastrar from './Usuario/Cadastrar.js';

function irCadastrar() {
    return console.log('Foi')
}

function Menu() {
    return (
        <nav className="nav">
            <header>
                <img src={logo}></img>
            </header>
            <div className="div_cadastrar">
                <button onClick={irCadastrar}>Cadastrar</button>
            </div>
        </nav>
    );
}

export default Menu;