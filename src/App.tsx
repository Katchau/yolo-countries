import React from 'react';
import './App.css';
import { CountryTable } from "./components/country-table/CountryTable";
import { GetCountryQuery } from "./service/country-service";
import { useAppSelector } from "./store/hooks";
import {selectFilter} from "./store/slices/slices";
import {CountryInput} from "./components/country-input/CountryInput";

function App() {
  const inputText = useAppSelector(selectFilter);

  const { data, error: requestError, loading } = GetCountryQuery();

  // like the country input, this could've also been a different component
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
          <CountryInput isDisabled={loading || !!requestError} />
          {
            CountryBody()
          }
        </div>
      </div>
    </div>
  );
}

export default App;
