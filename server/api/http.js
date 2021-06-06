const { default: axios } = require('axios');

const instance = axios.create({
  baseURL: 'https://api.mercadolibre.com/',
  headers: {
    "Content-type": "application/json",
    "accept": "application/json",
  }
});

module.exports = {
  axios,
  instance
};

