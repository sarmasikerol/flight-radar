import axios from "axios";

const api = axios.create({
  baseURL: "https://flight-radar1.p.rapidapi.com",

  headers: {
    'x-rapidapi-key': '5a56265c38msh86935356e173491p129c35jsn6beefb15f6db',
    'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
  },
});

export default api;