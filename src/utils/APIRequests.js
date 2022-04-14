const axios = require('axios');

const {
  PUBLIC_API_URL,
  ACCESS_TOKEN
} = require('../config');

export const fetchCities = async (isGEOJSON) => {
  return new Promise((res, rej) => {
    axios.get(`${PUBLIC_API_URL}/city/all`, {

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
    axios.get(`${PUBLIC_API_URL}/city/names/all`).then(results => {
      return res(results.data.data);
    }).catch(err => {
      return rej(`Error with fetching city names: ${err.message}`);
    });
  });
}

export const pushVehicleData = async (id, data) => {
  return new Promise((res, rej) => {
    axios.post(`${PUBLIC_API_URL}/push/vehicleData`, {}, {
      headers: {
        'Access-Token': ACCESS_TOKEN
      },
      params: {
        id: id,
        data: data
      }
    }).then(results => {
      return res(results.data);
    }).catch(err => {
      return rej(`Error with pushing vehicle data: ${err.message}`);
    });
  });
}
