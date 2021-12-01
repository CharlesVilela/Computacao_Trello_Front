import './styles.css';
import { InputText } from 'primereact/inputtext';
import {Button } from 'primereact/button';

function Login() {
    return (
        <div className="App-header">

            <h1>Login</h1>

            <form method="post" action class="card">
                <div className="div_input">
                    <input type="email" name="email" placeholder="E-MAIL" />
                </div>

                <div>
                    <input type="password" name="password" placeholder="PASSWORD" />
                </div>
                <div>
                    <Button className="div_button">LOGAR</Button>
                </div>

            </form>
        </div>
    );

}

export default Login;