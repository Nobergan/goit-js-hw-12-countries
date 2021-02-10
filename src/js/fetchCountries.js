const url = 'https://restcountries.eu/rest/v2';

function fetchCountries(searchQuery) {
  return fetch(`${url}/name/${searchQuery}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));
}

export default fetchCountries;
