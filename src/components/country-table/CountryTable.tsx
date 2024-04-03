import React from 'react';

import styles from './CountryTable.module.css';
import ReactCountryFlag from "react-country-flag";
import { CountryQueryResult } from "../../types/types";

// It's reusable but in normal cases you should just have the prop countries: CountryData[]
interface CountryTableProps extends CountryQueryResult{
  filter?: string
}
export function CountryTable({countries, filter = ""}: CountryTableProps) {

  function TableBody() {
    // removing special characters, keeps underscores and spaces just in case 
    const filterReg = new RegExp(filter.replace(/[^\w\s]/gi, ''), "i");

    return (
      countries.map((country, index) => {
        return (filterReg.test(country.code) &&
          <tr key={index} className={styles.row}>
            <td className={[styles.tableCell, styles.countryName].join(" ")}>
              <ReactCountryFlag
                countryCode={country.code}
                svg
                style={{
                  fontSize: '2rem',
                  lineHeight: '2rem',
                }}
              />
              <span>{country.name}</span>
            </td>
            <td className={[styles.tableCell, styles.code].join(" ")}>
              {country.code}
            </td>
          </tr>
        )
      })
    )
  }

  return (
    <table className={styles.tableContainer}>
      <thead className={styles.tableHead}>
        <tr className={styles.row}>
          <th className={styles.tableCell}>
            Country Name
          </th>
          <th className={styles.tableCell}>
            Country Code
          </th>
      </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {!!countries &&
          TableBody()
        }
        <tr className={[styles.row, styles.defaultState].join(" ")}>
          <td>
            No country data available
          </td>
        </tr>
      </tbody>
    </table>
  );
}
