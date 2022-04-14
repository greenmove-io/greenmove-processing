const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
import { fetchCities } from './FetchRequests';

const ProcessVEHICLES = async () => {
  let MATCHED_DATA = [];

  // let cities = await fetchCities().catch(err => console.error(err));
  // console.log(cities);
  console.log('Processing data...');
  csv.parseFile(path.resolve(__dirname, '../assets/hidden', 'Registered_Vehicles_2021_Q3.csv'), { headers: true })
  .on('data', row => {
    console.log(row);
  })
  .on('error', err => console.error(err))
  .on('end', rowCount => {
      console.log('Parsed: ', rowCount);
      // fs.writeFileSync(path.resolve(__dirname, '../assets/hidden', 'NPTA.json'), JSON.stringify(KEPTDATA, null, 2), 'utf-8');
  });
}
export default ProcessVEHICLES;
