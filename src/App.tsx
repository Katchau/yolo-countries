import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import { debounce } from "lodash";
import { CountryTable } from "./components/country-table/CountryTable";
import { GetCountryQuery } from "./service/country-service";

function App() {
  const [inputText, setInputText] = useState("");

  const { data, error: requestError, loading } = GetCountryQuery();

  const CountryInput = () => {

    // simple timeout and clear timeout would also work
    const debouncedOnChange = debounce((event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      console.log("dafuq")
      setInputText(event.target.value);
    }, 100);

    return <input type="text" onChange={debouncedOnChange} disabled={!!requestError || loading} />
  }

  function CountryBody() {
    if (requestError) {
      console.log("request error", requestError);
      return (
        <div>
          <h3>There was an error retrieving country data</h3>
          <p>{requestError.message}</p>
        </div>
      );
    }
    if (loading) {
      return (
        <h3>Loading...</h3>
      );
    }
    if (data) {
      return (
        <CountryTable countries={data.countries} filter={inputText} />
      );
    }
    return <></>
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>
          Yolo Group Challenge for Frontend Developer
        </h1>
        <h3>
          Challenge done by João Loureiro
        </h3>
      </div>
      <div className="App-body">
        {
          CountryInput()
        }
        {
          CountryBody()
        }
      </div>
    </div>
  );
}

export default App;
