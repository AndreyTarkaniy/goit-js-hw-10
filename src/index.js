import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { createListMarkupCountry } from './js/createListMarcupCountry';
import { createListMarkupCountryInfo } from './js/createListMarcupCountryInfo';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  listCountry: document.querySelector('.country-list'),
  infoCountry: document.querySelector('.country-info'),
};

const onFetchInfo = () =>
  Notify.info('Too many matches found. Please enter a more specific name.');

const onFetchError = () =>
  Notify.failure('Oops, there is no country with that name');

const renderCountry = country => {
  if (country.length > 10) {
    onFetchInfo();
  } else if (country.length === 1) {
    const markup = createListMarkupCountryInfo(country);
    refs.infoCountry.innerHTML = markup;
  } else {
    const markup = createListMarkupCountry(country);
    refs.listCountry.innerHTML = markup;
  }
};

const handleSearchCountry = event => {
  event.preventDefault();

  const searchCountry = event.target.value.trim();

  if (searchCountry) {
    fetchCountries(searchCountry).then(renderCountry).catch(onFetchError);
  }

  refs.listCountry.innerHTML = '';
  refs.infoCountry.innerHTML = '';
};

refs.input.addEventListener(
  'input',
  debounce(handleSearchCountry),
  DEBOUNCE_DELAY
);
