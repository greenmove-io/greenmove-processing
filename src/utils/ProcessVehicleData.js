const fs = require('fs');
const path = require('path');

import { fetchCities, fetchCity, pushVehicleData } from './APIRequests';
import VEHICLE_DATA from '../assets/hidden/Registered_Vehicles_2021_Q3.csv';

const ProcessVehicleData = async () => {
  console.log('Processing data...');
  let cities = await fetchCities().catch(err => console.error(err));
  cities.map(async (p, i) => {
    setTimeout(async () => {
      let city = await fetchCity(p.place_id);
      console.log(`${city.name}`);
      let postcodes = city["postcode_districts"];
      let temp = city;
      temp.car_count = 0;
      temp.motorcycle_count = 0;
      temp.other_count = 0;

      postcodes.map(postcode => {
        let data = VEHICLE_DATA.find(x => x[0].toLowerCase() === postcode.toLowerCase());
        if(data !== undefined) {
          if(!isNaN(data[1])) temp.car_count += Number(data[1]);
          if(!isNaN(data[2])) temp.motorcycle_count += Number(data[2]);
          if(!isNaN(data[3])) temp.other_count += Number(data[3]);
        }
      });

      if(temp.car_count !== 0 || temp.motorcycle_count !== 0 || temp.other_count !== 0) {
        let vehicle_count = temp.car_count + temp.motorcycle_count + temp.other_count;
        const response = await pushVehicleData(p.place_id, vehicle_count).catch(err => console.error(err));
        console.log(response);
      }
    }, 800 * cities.length - 800 * i);
  });
}
export default ProcessVehicleData;
