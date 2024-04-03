import React, {useEffect, useState} from 'react';

import styles from './CountryTable.module.css';
import ReactCountryFlag from "react-country-flag";
import { CountryQueryResult } from "../../types/types";

// It's reusable but in normal cases you should just have the prop countries: CountryData[]
interface CountryTableProps extends CountryQueryResult{
  filter?: string
}
export function CountryTable({countries, filter = ""}: CountryTableProps) {

  function TableBody() {
    const filterReg = new RegExp(filter, "i");

    return (
      countries.map((country, index) => {
        return (filterReg.test(country.name) &&
          <tr key={index}>
            <td>
              <ReactCountryFlag
                countryCode={country.code}
                svg
                style={{
                  fontSize: '2rem',
                  lineHeight: '2rem',
                }}
              />
              {country.name}
            </td>
            <td>
              {country.code}
            </td>
          </tr>
        )
      })
    )
  }

  return (
    <table className={styles.tableContainer}>
      <thead>
      <tr>
        <th>
          Country Name
        </th>
        <th>
          Country Code
        </th>
      </tr>
      </thead>
      <tbody className={styles.tableBody}>
      {countries.length > 0 ?
        TableBody() :
        <tr>
          <td>
            No country data available
          </td>
        </tr>
      }
      </tbody>
    </table>
  );
}
