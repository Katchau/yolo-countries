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
      setInputText(event.target.value);
    }, 100);

    return (
      <div className="inputArea">
        <span>Country filter input </span>
        <input type="text" onChange={debouncedOnChange} disabled={!!requestError || loading} placeholder="country code"/>
      </div>
    )
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
          Hub88 Group Challenge for Frontend Developer
        </h1>
        <h2>
          Challenge done by João Loureiro
        </h2>
      </div>
      <div className="App-body">
        <div className="App-body-wrapper">
          {
            CountryInput()
          }
          {
            CountryBody()
          }
        </div>
      </div>
    </div>
  );
}

export default App;
