import React from 'react';
import logo from './logo.svg';
import { Counter } from './components/counter/Counter';
import './App.css';
import {Streetview} from "./components/streetview/Streetview";
import { useQuery, gql } from "@apollo/client";

function App() {
  const COUNTRY_QUERY = gql`
    query GetCountries {
      countries {
      code
      emoji
      name
    }
  }
 `;

  const { data } = useQuery(COUNTRY_QUERY);
  console.log("hmm", data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>

      <div>
        <Streetview />
      </div>
    </div>
  );
}

export default App;
