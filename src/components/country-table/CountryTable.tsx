import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '../../store/slices/counter/counterSlice';
import styles from './CountryTable..module.css';
import ReactCountryFlag from "react-country-flag";

interface CountryData {
  name: string,
  code: string,
  emoji: string
}

export interface TableProps {
  countries: CountryData[],
}

export function CountryTable({countries}: TableProps) {
  function TableBody() {

    return (
      countries.map((country, index) => {
        return (
          <tr tabIndex={index}>
            <td>
              <ReactCountryFlag countryCode={country.emoji} /> {country.name}
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
      <tbody>
      {countries.length ?
          TableBody() :
          <p>Loading...</p>
      }
      </tbody>
    </table>
  );
}
