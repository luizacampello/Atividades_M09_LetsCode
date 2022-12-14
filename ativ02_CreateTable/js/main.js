const newTable = document.createElement("table");
const header = newTable.createTHead();
const tableBody = newTable.createTBody();
const footer = newTable.createTFoot();

document.body.appendChild(newTable);

const titles = ['Nome', 'Espécie', 'País', 'N° Exemplares']

const animalsContent = [
    {
        "nome": "Lobo",
        "especie": "Lobo-vermelho",
        "pais": "América do Norte",
        "exemplares": 200
      },
    {
        "nome": "Tigre",
        "especie": "Tigre-de-bengala",
        "pais": "Bangladesh, Índia",
        "exemplares": 2000
      },
    {
        "nome": "Arara",
        "especie": "Ararinha-azul",
        "pais": "Brasil",
        "exemplares": 60
      },
  
    {
        "nome": "Orangotango",
        "especie": "Orangotango-de-sumatra",
        "pais": "Indonésia",
        "exemplares": 6000
      },

    {
        "nome": "Zebra",
        "especie": "Zebra-de-Grévy",
        "pais": "Quênia",
        "exemplares": 2400
      },

    {
        "nome": "Gorila",
        "especie": "Gorila-das-montanhas",
        "pais": "República Democrática do Congo",
        "exemplares": 1000
      },

    {
        "nome": "Papagaio",
        "especie": "Papagaio-mocho ou Kakapo",
        "pais": "Nova Zelândia",
        "exemplares": 100
      }
]

function addAnimalsTable(animalsContent) {
  animalsContent.forEach(animal => 
    mapObjectToCell(animal)
  );
}

function mapObjectToCell(animal) {
  const newRow = tableBody.insertRow();

  Object.values(animal).forEach(item => {
    const newColumn = document.createElement('td');
    newRow.appendChild(newColumn);
    newColumn.textContent = item;
  });
}

function addTitlesTable(titles) {
  const headerRow = header.insertRow();

  titles.forEach(function(title){
    const headerCell = document.createElement('th');
    headerRow.appendChild(headerCell);
    headerCell.textContent = title;
  });
}

function addTableStyle (){
  document.body.style.backgroundColor = "#9E1C44";

  header.style.backgroundColor = "rgba(255,255,255,0.3)";
  footer.style.backgroundColor = "rgba(255,255,255,0.3)";

  let tdFooter = footer.getElementsByTagName("td");

  tdFooter[0].colSpan = "3";
  tdFooter[0].backgroundColor = "rgba(255,255,255,0.3)";  

  tableBody.setAttribute("class", "tbl-content");
  newTable.setAttribute("class", "table");
}

function addValueToFooter(animalsContent){
  const footerRow = footer.insertRow();
  const footerTitle = footerRow.insertCell();
  const footerCell = footerRow.insertCell();
  footerTitle.textContent = "Total de exemplares:";
  footerCell.textContent = getSumFromArray(animalsContent);   
}

function getSumFromArray(animalsContent){
  let sum = 0;

  animalsContent.forEach(item => {
    sum += item.exemplares;
  });
  return sum;
}

function addCSSFile () {
  const link = document.createElement('link');
 
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'style.css';

  document.getElementsByTagName('HEAD')[0].appendChild(link);
}

addTitlesTable(titles);
addAnimalsTable(animalsContent);
addValueToFooter(animalsContent);
addCSSFile();
addTableStyle();
