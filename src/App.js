import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lviv" />
      </div>
      <footer>
        <a
          href="https://github.com/AlforovaNata/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced code
        </a>{" "}
        by{" "}
        <a
          href="https://poetic-tanuki-2052b6.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Nataliia Alforova{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
