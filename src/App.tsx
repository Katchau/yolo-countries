import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import { debounce } from "lodash";
import { CountryTable } from "./components/country-table/CountryTable";
import { GetCountryQuery } from "./service/country-service";

function App() {
  const [inputText, setInputText] = useState("");

  const { data, error: requestError, loading } = GetCountryQuery();

  useEffect(()=>{
    console.log("yooo", inputText);
    console.log("wtf", data?.countries, loading);
  });

  const CountryInput = () => {

    // simple timeout and clear timeout would also work
    const debouncedOnChange = debounce((event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
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
  }

  return (
    <div className="App">
      <div className="">
        <h1>
          Yolo Group Challenge for Frontend Developer
        </h1>
        <h3>
          Challenge done by João Loureiro
        </h3>
      </div>
      <div>
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
