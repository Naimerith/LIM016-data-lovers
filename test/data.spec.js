
import { 
  functionAll, 
  filterByTeamFunc, 
  filterBySportFunc, 
  sortData, 
  sortByName, 
  computeData, 
  genderAll, 
  filterByGender, 
  sortByAge, 
  allCountries, 
  allSport 
} from '../src/data.js';

const mockData = [
  {
    "name": "Ins Boubakri",
    "gender": "F",
    "sport": "Fencing",
    "team": "Tunisia",
    "noc": "TUN",
    "age": 27,
    "medal": "Bronze"
  },
  {
    "name": "David Alasdair Boudia",
    "gender": "M",
    "sport": "Diving",
    "team": "United States",
    "noc": "USA",
    "age": 27,
    "medal": "Bronze"
  },
  {
    "name": "David Alasdair Boudia",
    "gender": "M",
    "sport": "Diving",
    "team": "United States",
    "noc": "USA",
    "age": 27,
    "medal": "Silver"
  },
  {
    "name": "Sara Aldana",
    "gender": "F",
    "sport": "Ballet",
    "team": "United States",
    "noc": "USA",
    "age": 25,
    "medal": "Gold"
  },
  {
    "name": "Carline Bouw",
    "gender": "F",
    "sport": "Rowing",
    "team": "Netherlands",
    "noc": "NED",
    "age": 31,
    "medal": "Silver"
  }
]

describe('probando la funciones de filtrado', () => {
  it('debe ser una funcion', () => {
    expect(typeof functionAll).toBe('function');
  });
  it('deberia retornar cuantos atletas por el pais "United States"', () => {
    let testFunctionAll = functionAll(mockData, filterByTeamFunc('United States'));
    expect(testFunctionAll).toHaveLength(3);
  });
  it('deberia retornar cuantos atletas por el deporte "Diving"', () => {
    let testFilterBySport = functionAll(mockData, filterBySportFunc("Diving"));
    expect(testFilterBySport).toHaveLength(2);
  });
  it('deberia retornar los atletas de genero "M"', () => {
    let testFilterByGender = functionAll(mockData, filterByGender("M"));
    expect(testFilterByGender).toHaveLength(2);
  })
});
describe('probando los new set', () => {
  it('deberia retornar nuevo objeto sin repeticiones', () => {
    let testNewSetAllCountries = allCountries(mockData);
    expect(testNewSetAllCountries.size).toBe(3);
  });
  it('deberia retornar nuevo objeto sin repeticiones', () => {
    let testNewSetAllCountries = allSport(mockData);
    expect(testNewSetAllCountries.size).toBe(4);
  });
  it('deberia retornar nuevo objeto sin repeticiones', () => {
    let testNewSetAllCountries = genderAll(mockData);
    expect(testNewSetAllCountries.size).toBe(2);
  })
})

describe('probando la funciones de Ordenar', () => {
  it('deberia ordenar atletas de manera dscendente', () => {
    let testSortData = sortData(mockData, sortByName, false);
    expect(testSortData[0].name).toBe("Sara Aldana");
    expect(testSortData[1].name).toBe("Ins Boubakri");
    expect(testSortData[2].name).toBe("David Alasdair Boudia");
    expect(testSortData[3].name).toBe("David Alasdair Boudia");
    expect(testSortData[4].name).toBe("Carline Bouw");
  });
  it('deberia retornar edad de los atletas de mayor a menor', () => {
    let testSortDataByAge = sortData(mockData, sortByAge);
    expect(testSortDataByAge[0].age).toBe(31);
    expect(testSortDataByAge[1].age).toBe(27);
    expect(testSortDataByAge[2].age).toBe(27);
    expect(testSortDataByAge[3].age).toBe(27);
    expect(testSortDataByAge[4].age).toBe(25);
  })
});

describe('probando la funcion computeData', () => {
  it('is a function', () => {
    expect(typeof computeData).toBe('function');
  });
  it('Deberia retornar cuantas medallas de oro, plata y bronce para el pais "United States"', () => {
    let mockResult = computeData(mockData);
    expect(mockResult[0].gold).toEqual(1);
    expect(mockResult[0].silver).toEqual(1);
    expect(mockResult[0].bronce).toEqual(1);
    expect(mockResult[0].total).toEqual(3);
  });
});

