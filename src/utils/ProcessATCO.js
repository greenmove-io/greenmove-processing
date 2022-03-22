const turf = require('@turf/helpers');
const booleanPointInPolygon = require('@turf/boolean-point-in-polygon');
// const ATCO_DATA = require('../assets/hidden/NPTA.json');
// const GEOJSON_DATA = require('../assets/hidden/Major_Towns_and_Cities.geojson');

const ATCO_DATA = [
  {
    "ATCOCode": "010",
    "NaptanCode": "bstgwpa",
    "NptgLocalityCode": "N0077020",
    "LocalityName": "Temple Meads",
    "Easting": "359396",
    "Northing": "172388",
    "Longitude": "-2.58569",
    "Latitude": "51.44901",
    "AdministrativeAreaCode": "009"
  },
  {
    "ATCOCode": "017",
    "NaptanCode": "sglmtmg",
    "NptgLocalityCode": "E0053734",
    "LocalityName": "Yate",
    "Easting": "371672",
    "Northing": "182385",
    "Longitude": "-2.40985",
    "Latitude": "51.53965",
    "AdministrativeAreaCode": "051"
  },
  {
    "ATCOCode": "018",
    "NaptanCode": "bthmtwj",
    "NptgLocalityCode": "N0078123",
    "LocalityName": "Bath City Centre",
    "Easting": "375078",
    "Northing": "164373",
    "Longitude": "-2.35946",
    "Latitude": "51.37786",
    "AdministrativeAreaCode": "001"
  },
  {
    "ATCOCode": "019",
    "NaptanCode": "wsmdjpm",
    "NptgLocalityCode": "E0040110",
    "LocalityName": "Worle",
    "Easting": "336798",
    "Northing": "162964",
    "Longitude": "-2.90916",
    "Latitude": "51.36221",
    "AdministrativeAreaCode": "038"
  },
  {
    "ATCOCode": "020",
    "NaptanCode": "bfsajtdt",
    "NptgLocalityCode": "E0043632",
    "LocalityName": "Great Barford",
    "Easting": "512812",
    "Northing": "252362",
    "Longitude": "-0.35232",
    "Latitude": "52.15802",
    "AdministrativeAreaCode": "069"
  },
  {
    "ATCOCode": "021",
    "NaptanCode": "ahladadp",
    "NptgLocalityCode": "E0000324",
    "LocalityName": "Newmill End",
    "Easting": "512074",
    "Northing": "218119",
    "Longitude": "-0.37429",
    "Latitude": "51.85042",
    "AdministrativeAreaCode": "151"
  }
];

const fillGeoPoints = async () => {
  return Promise.all(
    ATCO_DATA.map((data) => {
      return new Promise( async (res, rej) => {
        res([ data['Longitude'], data['Latitude'] ]);
      });
    })
  ).then((pts) => {
    return(pts);
  }).catch(err => {
    console.log('There was an error with a point: ', err);
  })
}

const ProcessATCO = async () => {
  // const points = turf.points(await fillGeoPoints());

  // const searchWithin = turf.multiPolygon()
  console.log('hello world');
}
export default ProcessATCO;
