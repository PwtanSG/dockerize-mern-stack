import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'

function App() {

  const [result, setResult] = useState('loading please wait....');
  const rendered = useRef(false)

  useEffect(() => {
    if(!rendered.current){
      const getHealth = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/testapi`);
        // console.log(response.data)
        setResult(response.data)
      }
      getHealth();
    }
    return () => {
      rendered.current = true
    }
  }, [])
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>API_URL :{process.env.REACT_APP_API_URL} {result}</p>
        <p>DB : </p>
        <p><code>src/App.js</code> and... save to hot reload.</p>
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
