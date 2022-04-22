const axios = require('axios');

const {
  PUBLIC_API_URL,
  ACCESS_TOKEN
} = require('../config');

export const fetchCities = async (isGEOJSON) => {
  return new Promise((res, rej) => {
    axios.get(`${PUBLIC_API_URL}/places/all`, {

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
    axios.get(`${PUBLIC_API_URL}/places/names/all`).then(results => {
      return res(results.data.data);
    }).catch(err => {
      return rej(`Error with fetching city names: ${err.message}`);
    });
  });
}

export const pushVehicleData = async (id, data) => {
  return new Promise((res, rej) => {
    axios.post(`${PUBLIC_API_URL}/places/${id}/vehicleQuantity`, {data: data}, {
      headers: {
        'Access-Token': ACCESS_TOKEN
      }
    }).then(results => {
      return res(results.data);
    }).catch(err => {
      return rej(`Error with pushing vehicle data: ${err.message}`);
    });
  });
}
