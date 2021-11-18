import '../components/components.styles.css'
import logo from '../imagem/logo.png'

function Menu() {
    return (
        <nav className="nav">
            <div>
                <img src={logo}></img>
            </div>

            <div className="div_cadastrar">
                <a>Cadastrar</a>
            </div>
        </nav>
    );
}

export default Menu;