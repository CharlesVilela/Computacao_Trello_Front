import './styles.css'
function Login() {
    return (
        <div className="App-header">
            
            <h1>Login</h1>

            <form method="post" action class="card">
                <div className="div_input">
                    <input type="email" name="email" placeholder="E-MAIL"/>
                </div>

                <div>
                    <input type="password" name="password" placeholder="PASSWORD"/>
                </div>

                <div>
                    <button type="submit" className="div_button">LOGAR</button>
                </div>
            </form>

        </div>
    );

}

export default Login;