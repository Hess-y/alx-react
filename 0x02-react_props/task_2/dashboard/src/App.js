import logo from './holberton-logo.svg';
import './App.css';
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
    </div>
    <div className="App-body">
	 <p>Login to access the full dashboard</p>
	 <label htmlFor="email">Email:</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />

        <button>OK</button>
    </div>
       <footer className="App-footer">
	   Copyright {getFullYear()} - {getFooterCopy()}
       </footer>
    </div>
  );
}
export default App;
