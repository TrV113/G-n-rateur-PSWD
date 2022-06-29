// Rappel des types de données
let string = 'chaine';
let number = 25;
let boolean = true;
let maVariable; // type Undefined

//Tableaux
let array = ['Bordeaux', 'Toulouse', 'Nante'];

// console.log(array[0][3]);

let array2 = ['Bordeaux', 24, true, [1, 2], { nom: 'Denis' }];
// Chaine de charactere, nombre, boolean, tableaux, objet

// console.log(array2[4].nom);

let objet = {
  pseudo: 'Denis',
  age: 33,
  technos: ['Javascript', 'React', 'NodeJs'],
  admin: false,
};

// console.log(objet);
// // Si il ne connait pas la données il l'a rajoute

// objet.adresse = '22 rue du code';

// console.log(objet);
// // On peut changer le type
// objet.adresse = 25;

// console.log(objet);

let Data = [
  {
    pseudo: 'Denis',
    age: 33,
    technos: ['Javascript', 'React', 'NodeJs'],
    admin: false,
  },
  {
    pseudo: 'Samia',
    age: 24,
    technos: ['Javascript', 'React', 'NodeJs'],
    admin: false,
  },
  {
    pseudo: 'Nikola',
    age: 42,
    technos: ['Php', 'React', 'NodeJs'],
    admin: true,
  },
];

// console.log(Data[2].pseudo[0]);
//*******************************************/
//Structure de controle
//*******************************************/

// if (Data[0].age > Data[1].age) {
//   console.log(Data[0].pseudo + ' Est plus agé que ' + Data[1].pseudo);
// } else {
// valeur si faux
// }

// ternaire :

// valeur à tester ? si vrai : si faux

// While ( tant que )

let w = 0;

while (w < 40) {
  w++;
  //   console.log('La valeur de w est de ' + w);
}

// Do while
let d = 0;

do {
  d++;
  //   console.log(d);
} while (d < 5);

// Les boucles for

for (const user of Data) {
  //   document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}

// On declare la valeur de i / on dit jusqu'où on boucle / on incrémente i si la condition 2 n'est pas remplie
for (i = 0; i < Data.length; i++) {
  //   console.log(i);
  //   console.log(Data[i].technos[0]);
  //   document.body.innerHTML += '<h2>' + Data[i].pseudo + '</h2>';
}

// Le switch
document.body.addEventListener('click', (e) => {
  console.log(e.target.id);

  switch (e.target.id) {
    case 'javascript':
      document.body.style.background = 'yellow';
      break;
    case 'php':
      document.body.style.background = 'purple';
      break;
    case 'python':
      document.body.style.background = 'blue';
      break;
    default:
      null;
  }
});

//Méthodes String
let string2 = 'javascript est un langage orienté objet';

// console.log(typeof '42');
// console.log(eval(parseInt('2') + 78));
// console.log(isNaN(string2));

// console.log(string2.length);

// console.log(string2.indexOf('langage'));

// console.log(string2.split(' '));

// console.log(string2.toUpperCase()); et toLowerCase

// console.log(string2.replace('javascript', 'Php'));

// Methodes number

let number2 = 42.1234;

// console.log(number2.toFixed(1));

// Math

// Math.floor arrondis au blus bas
// Math.ceil arrondis au plus haut
// Math.sqrt fait la racine carré
// Math.random() chiffre entre 0 et 1 !important

// Méthodes array

let array3 = ['Javascript', 'Php', 'Python'];
let array4 = ['Ruby', 'Solidity'];

// let newArray = array3.concat(array4);
// console.log(newArray);

// let newArray = [...array3, ...array4];
// console.log(newArray);

// console.log(array3.join('-')); Rajoute ce qu'il y a entre les cotes

// console.log(array3.slice(1));
// console.log(newArray.slice(2, 5));

// console.log(array3.indexOf('Python'));

// array3.forEach((languages) => console.log(languages));

// IMPORTANT //

let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y));
arrayNumber.push(25);
// console.log(arrayNumber);

// FILTER, SORT, MAP

// console.log(arrayNumber.filter((number) => number > 10));
// console.log(arrayNumber.sort((a, b) => b - a)); plus grand au plus petit a - b => l'inverse
