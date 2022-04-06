const axios = require('axios');

export const fetchCityNames = async () => {
  return new Promise((res, rej) => {
    axios.get(`http://localhost:3080/city/names/all`).then(results => {
      return res(results.data.data);
    }).catch(err => {
      return rej(`Error with fetching city names: ${err.message}`);
    });
  });
}
