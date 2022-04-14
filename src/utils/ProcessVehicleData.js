const fs = require('fs');
const path = require('path');

import { fetchCities } from './FetchRequests';
import VEHICLE_DATA from '../assets/hidden/Registered_Vehicles_2021_Q3.csv';

const ProcessVehicleData = async () => {
  let MATCHED_DATA = [];

  // console.log(VEHICLE_DATA);
  console.log('Processing data...');
  let cities = await fetchCities().catch(err => console.error(err));
  // console.log(cities);
  // console.log(VEHICLE_DATA);
  cities.map(city => {
    let postcodes = city["postcode_districts"].split(',');
    let temp = city;
    temp.car_count = 0;
    temp.motorcycle_count = 0;
    temp.other_count = 0;

    postcodes.map(postcode => {
      let data = VEHICLE_DATA.find(x => x[0].toLowerCase() === postcode.toLowerCase());
      if(data !== undefined) {
        if(!isNaN(data[1]) && !isNaN(data[2]) && !isNaN(data[3])) {
          temp.car_count += Number(data[1]);
          temp.motorcycle_count += Number(data[2]);
          temp.other_count += Number(data[3]);
        }
      }
    });

    if(temp.car_count !== 0 || temp.motorcycle_count !== 0 || temp.other_count !== 0) {
      MATCHED_DATA.push(temp);
    }
  });

  console.log(MATCHED_DATA);
  console.log('City Vehicle count amount: ', MATCHED_DATA.length);

  // let data = VEHICLE_DATA.find(x => x[0].toLowerCase() === 'AB25'.toLowerCase());
  // console.log(data);
}
export default ProcessVehicleData;