export interface CountryData {
  name: string,
  code: string,
  emoji: string
}

export interface CountryQueryResult {
  countries: CountryData[],
}