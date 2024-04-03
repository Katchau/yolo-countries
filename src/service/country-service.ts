import {gql, QueryResult, useQuery} from "@apollo/client";
import {CountryQueryResult} from "../types/types";

const COUNTRY_QUERY = gql`
    query GetCountries {
      countries {
      code
      emoji
      name
    }
  }
 `;

export function GetCountryQuery(): QueryResult<CountryQueryResult, Error> {
 return useQuery(COUNTRY_QUERY);
}