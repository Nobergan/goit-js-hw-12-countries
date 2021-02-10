import '../src/styles.css';
import fetchCountries from './js/fetchCountries.js';
import refs from './js/refs';
import updateMarkup from './js/updateMarkup';

const debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(handleTextInput, 500));

function handleTextInput(event) {
  const countryName = event.target.value;

  if (countryName === '') {
    return;
  }

  refs.articlesContainer.innerHTML = '';

  fetchCountries(countryName).then(updateMarkup);
}
