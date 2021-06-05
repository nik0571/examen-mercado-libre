import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.mercadolibre.com/',
  headers: {
    "Content-type": "application/json",
    "accept": "application/json",
  }
});

export default instance;
export { axios };
