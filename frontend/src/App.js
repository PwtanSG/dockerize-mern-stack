import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useState } from 'react'

function App() {

  const [result, setResult] = useState('loading ....');
  const getHealth = async () => {
    const response = await axios.get('http://localhost/test');
    console.log(response.data)
    setResult(response.data)
  }
  getHealth();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {result} <code>src/App.js</code> and save to r2eload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
