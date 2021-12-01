import './stylesGlobal.css';
import Login from './components/Login/Login.js';
import Menu from './components/Menu.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>  
        <Login/>
      </header>
    </div>
  );
}

export default App;
