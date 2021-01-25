//Base URL
const base_url = "https://restcountries.eu/rest/v2/";

//All countries
export const allCountriesURL = () => "https://restcountries.eu/rest/v2/all";

//Country by name
export const countryNameURL = (country_name) =>
  `${base_url}name/${country_name}`;

//Country by region
export const countriesRegionURL = (countries_region) =>
  `${base_url}region/${countries_region}`;
