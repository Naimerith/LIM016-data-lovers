import { functionAll,filterByTeamFunc,sortData, sortByName } from '../src/data.js';


describe('probando la funcion functionAll', () => {
  it('debe ser una funcion', () => {
    expect(typeof functionAll).toBe('function');
  }); 
});

it ('deberia retornar cuantos atletas por el pais "France', ()=>{
  let arrayTest = [  {
    "name": "Tijana Bogdanovi",
    "gender": "F",
    "height": "172",
    "weight": "52",
    "sport": "Taekwondo",
    "team": "Serbia",
    "noc": "SRB",
    "age": 18,
    "event": "Taekwondo Women's Flyweight",
    "medal": "Silver"
  },
  {
    "name": "Andreea Boghian",
    "gender": "F",
    "height": "186",
    "weight": "78",
    "sport": "Rowing",
    "team": "Romania",
    "noc": "ROU",
    "age": 24,
    "event": "Rowing Women's Coxed Eights",
    "medal": "Bronze"
  },
  {
    "name": "Thibault Colard",
    "gender": "M",
    "height": "187",
    "weight": "70",
    "sport": "Rowing",
    "team": "France",
    "noc": "FRA",
    "age": 24,
    "event": "Rowing Men's Lightweight Coxless Fours",
    "medal": "Bronze"
  }];
  let testFunctionAll = functionAll(arrayTest, filterByTeamFunc('France'));
  expect (testFunctionAll.length).toBe(1);
});

describe('probando la funcion sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });
  
});

it ('deberia ordenar atletas de manera descendente',() => {
  
  let arrayTest2 =[ {
    "name": "Robson Donato Conceio",
    "gender": "M",
    "height": "171",
    "weight": "57",
    "sport": "Boxing",
    "team": "Brazil",
    "noc": "BRA",
    "age": 27,
    "event": "Boxing Men's Lightweight",
    "medal": "Gold"
  },
  {
    "name": "Julio",
    "gender": "M",
    "height": "193",
    "weight": "80",
    "sport": "Swimming",
    "team": "United States",
    "noc": "USA",
    "age": 21,
    "event": "Swimming Men's 4 x 200 metres Freestyle Relay",
    "medal": "Gold"
  },
  {
    "name": "Sally Conway",
    "gender": "F",
    "height": "167",
    "weight": "70",
    "sport": "Judo",
    "team": "Great Britain",
    "noc": "GBR",
    "age": 29,
    "event": "Judo Women's Middleweight",
    "medal": "Bronze"
  }];

  let testSortData = sortData(arrayTest2, sortByName, false);

  expect (testSortData[0].name).toBe("Sally Conway");
  expect (testSortData[1].name).toBe("Robson Donato Conceio");
  expect (testSortData[2].name).toBe("Julio");
});

