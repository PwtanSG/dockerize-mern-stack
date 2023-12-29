import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

function App() {
  const [result, setResult] = useState("loading please wait....");
  const [dbState, setDbState] = useState(false);
  const rendered = useRef(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (!rendered.current) {
      const getHealth = async () => {
        // console.log("info: " + process.env.REACT_APP_API_URL);
        // console.log("info2: " + apiUrl);
        const response = await axios.get(`${apiUrl}/api/health/testapi`);
        console.log(response.data)
        // console.log(response.status)
        response.status === 200
          ? setResult("okay")
          : setResult("something goes wrong...");
        // setResult(response.data);
      };
      getHealth();
    }
    return () => {
      rendered.current = true;
    };
  }, [apiUrl]);

  const handleTestDb = () => {
    console.log("test");
    const readwrite = async () => {
      const data = {
        description: "Test r/w db",
        remarks: "test",
      };
      const resp = await axios.post(`${apiUrl}/api/health/testdbrw`, data);
      resp.status === 200 ? setDbState(true) : setDbState(false);
    };
    readwrite();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>API_URL Test:{result}</p>
        <p>
          DB : R/W Test {dbState ? "Pass!!" : ""}
          <button onClick={handleTestDb}>Test DB</button>
        </p>
        <p>
          <code>src/App.js</code> and ... save to hot re-load.
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
