const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
import { fetchCityNames } from './FetchRequests';

const ProcessATCO = async () => {
  let DATA = [];
  let CITYDATA = [];

  const cityNames = await fetchCityNames().catch(err => console.error(`There was an error: ${err}`));

  console.log('Processing data...');
  // console.log(cityNames);
  csv.parseFile(path.resolve(__dirname, '../src/assets/hidden', 'AdminAreas.csv'), { headers: true })
    .on('data', row => {
        DATA.push(row);
    })
    .on('error', err => console.error(err))
    .on('end', rowCount => {
        console.log('Parsed: ', rowCount);
        cityNames.map(x => {
          let obj = DATA.find(o => o['AreaName'].includes(x.name));
          if(obj !== undefined) {
            CITYDATA.push({
              name: x.name,
              areaCode: obj['AdministrativeAreaCode'],
              ATCOCode: obj['AtcoAreaCode']
            });
          }
        })

        console.log(CITYDATA);
        console.log(CITYDATA.length)
    });
}
export default ProcessATCO;
