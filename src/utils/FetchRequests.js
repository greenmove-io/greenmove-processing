const axios = require('axios');

export const fetchCities = async (isGEOJSON) => {
  return new Promise((res, rej) => {
    axios.get(`http://localhost:3080/city/all`, {

    }).then(results => {
      return res(results.data.data);
    }).catch(err => {
      console.error(err);
      return rej(`Error with fetching cities: ${err.message}`);
    });
  });
}

export const fetchCityNames = async () => {
  return new Promise((res, rej) => {
    axios.get(`http://localhost:3080/city/names/all`).then(results => {
      return res(results.data.data);
    }).catch(err => {
      return rej(`Error with fetching city names: ${err.message}`);
    });
  });
}

export const pushVehicles = async () => {
  return new Promise((res, rej) => {
    axios.get(`http://localhost:3080/push/vehicles`).then(results => {
      return res(results.data);
    }).catch(err => {
      return rej(`Error with pushing vehicle data: ${err.message}`);
    });
  });
}
