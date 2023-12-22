import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

function App() {
  const [result, setResult] = useState("loading please wait....");
  const [dbState, setDbState] = useState(false);
  const rendered = useRef(false);

  useEffect(() => {
    if (!rendered.current) {
      const getHealth = async () => {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/testapi`
        );
        // console.log(response.data)
        setResult(response.data);
      };
      getHealth();
    }
    return () => {
      rendered.current = true;
    };
  }, []);

  const handleTestDb = () => {
    console.log("test");
    const readwrite = async () => {
      const data = {
        description: "Test r/w db",
        remarks: "test",
      };
      const resp = await axios.post(
        `${process.env.REACT_APP_API_URL}/testdbrw`,
        data
      );
      resp.status === 200 ? setDbState(true) : setDbState(false);
    };
    readwrite();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          API_URL :{process.env.REACT_APP_API_URL} {result}
        </p>
        <p>
          DB : R/W Test {dbState ? "Pass" : ""}
          <button onClick={handleTestDb}>Test DB</button>
        </p>
        <p>
          <code>src/App.js</code> and... save to hot reload.
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
