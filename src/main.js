import datos from "./data/athletes/athletes.js";
import {

  genderAll,
  filterByTeamFunc,
  filterBySportFunc,
  filterByGender,
  functionAll,
  sortData,
  sortByAge,
  sortByName,
  allCountries,
  allSport,
  computeData,
} from "./data.js";

const arrayAthletes = datos.athletes;//aqui guardo la data de todos los atletas
const arrayCountries = sortData(Array.from(allCountries(arrayAthletes))).reverse();//array de paises
const arraySport = sortData(Array.from(allSport(arrayAthletes))).reverse();// array de dportes
const team = document.getElementById('team');//select de paises
const sport = document.getElementById('sport');//select de dorpote
const orderBySelect = document.getElementById('orderBySelect');//select para ordenar
const gender = document.getElementById('gender');
const header = document.querySelector('.imgHeader');
const containerGender = document.querySelector('.containerGender');//form gender
const tableRankingTeam = document.getElementById("tableMedals"); //accedo a la tabla en el html
const modalTable = document.getElementById("tableMedalsModal");
const button = document.getElementById("buttonMedals"); //accedo al boton de ver mas 
const search = document.getElementById('search');

//BUSCADOR
const searchingAth = () => {
  let search2 = search.value.toLowerCase();
  const searching = arrayAthletes.filter(athlete => {
    return athlete.name.toLowerCase().includes(search2);
  });
  if (searching.length !== 0) {
    insertHtmlAtheles(searching.map(generateAthleteTemplate).join(''));
    document.getElementById("containerFatherMain").style.display = "none"; //ocultamos
    document.getElementById("carousel").style.display = "none"; //ocultamos
    document.getElementById("displayOrder").style.display = "block"; //mostramos
    document.getElementById("tableMedalsModal").style.display = "none";
    document.getElementById("close").style.display = "none";
    document.getElementById("error").style.display = "none";
    if (search2 === "") {
      reload();
    }
  }
}
search.addEventListener("keyup", searchingAth);


//REFRESCAR LA PAG CON EL HEADER
header.addEventListener('click', reload);

//FILTRO POR GENERO
let arrayGender = Array.from(genderAll(arrayAthletes));
for (let x = 0; x < arrayGender.length; x++) {
  let optionGender = document.createElement("option");
  optionGender.value = arrayGender[x];
  optionGender.innerHTML = arrayGender[x];
  containerGender.gender.appendChild(optionGender);
}

//PLANTILLA DE ATLETAS
const generateAthleteTemplate = (athlete) => {

  const athletegender = athlete.gender === "F" ? "./imagenes/femolimpi.PNG" : "./imagenes/atletasmasculinos.jpg"
  return `<article class="sportsContainer">
  
      <h1 class="nameAthlete">${athlete.name}</h1>
      <section class="infoAthlete">
        <figure class="boxImgAthlete">
            <img class="classAthlete" src= ${athletegender}>
        </figure>
        <section class="tableAthletes">
              <p> Genero: ${athlete.gender}</p>
              <p> Altura: ${athlete.height}</p>
              <p> Deporte: ${athlete.sport}</p>
              <p> Peso: ${athlete.weight}</p>
              <p> Pais: ${athlete.team}</p>
              <p> Edad: ${athlete.age}</p>
              <p> Medalla: ${athlete.medal}</p>     
        </section>
      </section>  
    </article>`
}


// RETORNAMOS PLANTILLA DE OPCIONES DEL FILTRO
const generateOptionTemplate = (arrayF) => {
  return `<option value="${arrayF}"> ${arrayF} </option> `;
};
// variable que tiene al option predeterminado de los select
const OptionselectedTemplate = `<option value="todos" selected="selected"> Todos </option>`;

//INSERTAMOS OPCIONES DE LOS SELECT EN HTML 
const insertHtmArray = (elemet, htmlArray) => {
  elemet.innerHTML =
    OptionselectedTemplate +
    htmlArray; 
};

//INSERTAMOS LOS ATLETAS EN HMTL
const insertHtmlAtheles = (htmlAthletes) => {

  const grid = document.getElementById("gridForTest");
  grid.innerHTML = htmlAthletes;
};


//GENERAMOS LAS OPCIONES PARA EL FILTRO DE PAISES Y DEPORTES
let htmlCountrie = arrayCountries.map(generateOptionTemplate).join("");
insertHtmArray(team, htmlCountrie);
let htmlSport = arraySport.map(generateOptionTemplate).join("");
insertHtmArray(sport, htmlSport);

let filtersToSort = []; 


//TODOS LOS FILTRO SEGUN LA ACCION DEL USUARIO 
const functionFilterGrouping = () => {
  const sportSelected = sport.value; 
  const teamSelected = team.value; 
  const genderSelected = gender.value;
  let filteredAthletes = arrayAthletes; 


  if (teamSelected !== "todos") {

    filteredAthletes = functionAll(filteredAthletes, filterByTeamFunc(teamSelected));

  }
  if (sportSelected !== "todos") {

    filteredAthletes = functionAll(filteredAthletes, filterBySportFunc(sportSelected));

  }
  if (genderSelected != "todos") {

    filteredAthletes = functionAll(filteredAthletes, filterByGender(genderSelected));
  }

  filtersToSort = filteredAthletes;
  insertHtmlAtheles(filteredAthletes.map(generateAthleteTemplate).join(''));

  document.getElementById("containerFatherMain").style.display = "none"; 
  document.getElementById("carousel").style.display = "none";
  document.getElementById("displayOrder").style.display = "block"; 
  document.getElementById("tableMedalsModal").style.display = "none";
  document.getElementById("close").style.display = "none";


  //MENSAJE QUE INDICA QUE NO EXISTE ATLETA PARA LA SELECCION 
  if (filteredAthletes == 0) {
    document.getElementById('error').style.display = 'flex';
  } else {
    document.getElementById('error').style.display = 'none';
  }

};
team.addEventListener("change", functionFilterGrouping);
sport.addEventListener("change", functionFilterGrouping);
gender.addEventListener("change", functionFilterGrouping);

orderBySelect.addEventListener("change", (event) => {
  const sortByValue =
    event.target
      .value; 
  if (sortByValue === "1") {
    let athleteSortByAge = sortData(
      filtersToSort,
      sortByAge,
      true
    ); 
    insertHtmlAtheles(athleteSortByAge.map(generateAthleteTemplate).join(""));
  }
  if (sortByValue === "2") {
    let athleteSortByName = sortData(filtersToSort, sortByName, true);
    insertHtmlAtheles(athleteSortByName.map(generateAthleteTemplate).join(''));
  }
  if (sortByValue === "3") {
    let sortByNameReverse = sortData(filtersToSort, sortByName, false);
    insertHtmlAtheles(sortByNameReverse.map(generateAthleteTemplate).join(''));
  }
});

//CREAMOS MEDALLERO DE TOP10 
let tableMedals = computeData(arrayAthletes, "team"); 
function topOfMedals(element, array) {
  let tableBody = document.createElement("tbody"); 
  for (let i = 0; i < array; i++) { 
    const posititionTable = tableMedals[i]; 

    let row = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = posititionTable.team;
    row.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = posititionTable.gold;
    row.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = posititionTable.silver;
    row.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = posititionTable.bronce;
    row.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = posititionTable.total;
    row.appendChild(td);
    tableBody.appendChild(row);

  }
  element.appendChild(tableBody);
}
topOfMedals(tableRankingTeam, 10);


button.addEventListener("click", function () {
  topOfMedals(modalTable, tableMedals.length);
  document.getElementById("containerFatherMain").style.display = "none"; 
  document.getElementById("bigTable").style.display = "block"; 
}); 

const buttonClose = document.getElementById("close"); 
buttonClose.addEventListener("click", reload); 

//ATLETAS DESTACADOS
let featuredAthletes = computeData(arrayAthletes, "name");

function generateTemplate(element, position) {

  const imageMedal = document.createElement('div');
  imageMedal.classList.add("imageMedal");
  imageMedal.innerHTML = '<img src="./imagenes/medallas.png" />';
  element.appendChild(imageMedal);

  const medalfeatureAthlete = document.createElement('p');
  medalfeatureAthlete.classList.add("medalFeatureAthletes");
  medalfeatureAthlete.innerHTML = featuredAthletes[position].gold + " " + featuredAthletes[position].silver + " " + featuredAthletes[position].bronce;
  element.appendChild(medalfeatureAthlete);

  const nameAthlete = document.createElement("p");

  nameAthlete.classList.add("nameAthlete");
  nameAthlete.innerHTML = featuredAthletes[position].name;
  element.appendChild(nameAthlete);
}
generateTemplate(document.getElementById("one"), 0);
generateTemplate(document.getElementById("two"), 1);
generateTemplate(document.getElementById("three"), 2);
generateTemplate(document.getElementById("four"), 3);
generateTemplate(document.getElementById("five"), 4);
generateTemplate(document.getElementById("six"), 5);
generateTemplate(document.getElementById("seven"), 6);
generateTemplate(document.getElementById("eight"), 7);
generateTemplate(document.getElementById("nine"), 8);
generateTemplate(document.getElementById("ten"), 9);

//BOTON DE VOLVER ARRIBA
function goTop(pxPantalla) { 
  window.addEventListener("scroll", () => { 

    let scroll = document.documentElement.scrollTop;
    let buttonTop = document.getElementById("btnArriba");
    if (scroll > pxPantalla) {
      buttonTop.style.right = 2 + "rem";
    } else {
      buttonTop.style.right = -10 + "rem";
    }
  })
}
goTop(1000);

//REFRESCA LA PAG CON EL BOTON DE CERRAR 
function reload() {
  location.reload();
}