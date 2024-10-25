// Ciao Ragazzi,
// Esercizio di oggi: Snack Array e Oggetti
// cartella/repo js-snack-es6

// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// Snack 2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ELABORAZIONE SNACK 1

const bikes = [
  {
    name: "Mountain Bike",
    weight: 20,
  },
  {
    name: "Road Bike",
    weight: 15,
  },
  {
    name: "Hybrid Bike",
    weight: 10,
  },
  {
    name: "E-Bike",
    weight: 30,
  },
];

//Stampa a schermo la bici con peso minore
function printLighterBike() {
  let lighterBike = bikes[0];
  for (let i = 0; i < bikes.length; i++) {
    if (bikes[i].weight < lighterBike.weight) {
      lighterBike = bikes[i];
    }
  }
  console.log(lighterBike);
}

printLighterBike();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ELABORAZIONE SNACK 2
// Array di oggetti di squadre di calcio.
const teams = [
  {
    name: "Pergolettese",
    points: 0,
    faults: 0,
  },
  {
    name: "Carrarese",
    points: 0,
    faults: 0,
  },
  {
    name: "Albinoleffe",
    points: 0,
    faults: 0,
  },
  {
    name: "Ternana",
    points: 0,
    faults: 0,
  },
];

//Visualizza gli oggetti con i punti fatti e falli subiti
console.log(teams);

//Genera numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
function randomizePoints() {
  //PER i che parte da 0 a teams.length, incrementa i
  for (let i = 0; i < teams.length; i++) {
    //Genera numeri random
    let randomPoints = Math.floor(Math.random() * 30);
    let randomFaults = Math.floor(Math.random() * 30);
    //Assegna i valori random ai punti e ai falli
    teams[i].points = randomPoints;
    teams[i].faults = randomFaults;
  }
}

//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
function printTeams() {
  //Dichiara un array vuoto
  let teamsArray = [];
  //PER i che parte da 0 a teams.length, incrementa i
  for (let i = 0; i < teams.length; i++) {
    //Creazione di un nuovo oggetto
    let team = {
      //prende il valore del nome e dei falli dell'oggetto iterato in quel momento
      name: teams[i].name,
      faults: teams[i].faults,
    };

    //Pusha i valori in teamsArray (array nuovo)
    teamsArray.push(team);
  }
  //Stampa l'array
  console.log(teamsArray);
}

//Chiamata funzioni
randomizePoints();
printTeams();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra gli indici dei due numeri.

//ELABORAZIONE SNACK BONUS

//Funzione che accetta tre argomenti, un array e due numeri (a più piccolo di b)
function printArray(array, a, b) {
  //Dichiara un array vuoto
  let newArray = [];
  //Per i che parte da 0 a array.length, incrementa i
  for (let i = 0; i < array.length; i++) {
    //SE i è maggiore del valore a e minore del valore b
    if (i > a && i < b) {
      //Pusha i valori in newArray (array nuovo)
      newArray.push(array[i]);
    }
  }
  //Stampa l'array
  console.log(newArray);
}

//Chiamata funzione
printArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 7);
