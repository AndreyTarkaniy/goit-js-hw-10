const BASE_URL = 'https://restcountries.com/v3.1/name/';
const SETTINGS = 'fields=name,population,capital,flags,languages';

export const fetchCountries = nameCountry => {
  return fetch(`${BASE_URL}${nameCountry}?${SETTINGS}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
