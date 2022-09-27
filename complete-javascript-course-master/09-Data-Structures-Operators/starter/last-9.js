'use strict';

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],


//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },





// THIS TEST DATA (pasted to textarea)

// underscore_case
//  first_name
// Some_Variable 
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)


// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅


// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
  
//   const jay = document.querySelector('textarea').value;
   
//   const splitted = jay.split('\n');
//   console.log(splitted);
//   for (const [i, fill] of splitted.entries()) {
//     const [first, second] = fill.toLowerCase().trim().split('_');

//     const outputs = (`${first}${second.replace(second[0], second[0].toUpperCase())}`);
//     console.log(`${outputs.padEnd(20)}${'🎈'.repeat(i + 1)}`);
    
//   }
// })

// padSTART/ string method/

// const maskCreditCard = function (sage) {
//   const stoic = sage + '';
//   const digit = stoic.slice(-4);
//   return digit.padStart(stoic.length, '*')


// }
// console.log(maskCreditCard('25454778866222'));
// console.log(maskCreditCard(25454778866222));
// const message = 'Go to gate 23'
// console.log(message.padEnd(20, '*'));

// console.log('Lydia'.padEnd(20, '*'));
// const planeNo = function () {



//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   console.log(rows);


//   for (const [i, row] of rows.entries()) {
//     const [first,second] = row.toLowerCase().trim().split('_');

//     // console.log(jay);
//     const joint = (`${first}${second.replace(second[0], second[0].toUpperCase())}`);
// // underscoreCase      ✅
//     console.log(`${joint.padEnd(18, ' ')}${'✅'.repeat(i + 1)}`)

// }
// planeNo()
// const capName = function (muslims) {
// const babes = muslims.split(' ')
// const nuEmptyArr = []

// for (const f of babes)
// nuEmptyArr.push (f[0].toUpperCase() + f.slice(1))

// console.log(nuEmptyArr.join(' '));

//repeat()method//

// const planesWaiting = function (niyo) {
//   console.log(`There are actually a couple of ${niyo} number of planes ${'✈'.repeat(niyo)}`);
// }
// planesWaiting(2)
// planesWaiting(4)
// planesWaiting(6)
// planesWaiting(9)


// Last coding challenge

// const checkEmail = function (firstCorrect, correctSecond) {
 
// const first =  firstCorrect;
// const second = correctSecond;
 
// //  BUGREM
// const compare = first === second ? true : false;
// console.log(compare);
// }
 
// checkEmail('aijalonbode@gmail.com', 'aijalonbode@gmail.com')


// document.body.append(document.createElement('textarea'));

// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {

//   const text = document.querySelector('textarea').value;
//   console.log(text);
// })
// }
// capName('rasheedat omotodun')
// capName('rukayyah bello')
// capName('rasheedat zuri dm')

// const planeDetectBaggage = function (bags) {
// const s = bags.toLowerCase();

// if( s.includes('gun') || s.includes('knife')) {
//   console.log('You are not permitted into the airport, you need to verify your documents');
// } else {
//    {
//     console.log('Have a safe flight and adhere to rules with your nose mask');
//   }
// }
// }
// tryig to receive a prompt wih this!!
// planeDetectBaggage('I have a laptop and some food with some wears along with a Gun, Knife')
// planeDetectBaggage('I have my goods along with just a protective gun')
// planeDetectBaggage('I\'m travelling with a my clothes and book and a Gun');


// planeDetectBaggage('I\'m a journalist,coming back tonight')

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'E' || s === 'B')
//   console.log('you got middleseat');
//   else 
//   console.log('You got lucky');
// }

// checkMiddleSeat('12XO')
// checkMiddleSeat('12XB')
// checkMiddleSeat('12XK')

// const checkEmail = function (email1, emailTo) {

// const first = email1
// const second = emailTo;


// const hey = first === second ? true : false;
// console.log(hey);
// }

// checkEmail('aijalonbode@gmail.com')
// checkEmail(' Aijalonbode@gmail.com ')

// const corrector = function (nameInput) {
//   const name = nameInput;
//   const nameFix = name[0].toUpperCase() + name.slice(1).toLowerCase();
//   return nameFix;
// };
// console.log(corrector(prompt('Name?')));


// .toLowerCase().slice(1);

// const normalize = emails => emails.toLowerCase().trim();

// const compareEmails = (e1, e2) => {
//   return normalize(e1) === normalize(e2) ? true : false;
// };
  // order: function (starty, mainy) {
  //   return [this.starterMenu[starty], this.mainMenu[mainy]];
  // },

  // orderD: function ({starty = 1, mainy = 2, time = '2pm', place = 'lagos', ambition = 'dickhead'}) {
  //   console.log(`Hi. I'm Aijalon, my favorite food is ${this.starterMenu[starty]} and ${this.mainMenu[mainy]}. 
  //   I work at ${place} every day @ ${time}. However ${ambition}`);
  // }
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`hey my favorite food is ${ing1}and ${ing2}. But sometimes i enjoy ${ing3}`);    
// }

// };

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const bisi of menu) {
//   console.log(bisi);
// }

// for (const [i, b] of menu.entries()) {
//   console.log(`${i + 1}, ${b}`);
// }

// for (const [i, b,] of menu.entries()) {
//   console.log(`${i + 1}, ${b}`);
// }

// console.log([...menu.entries()]);



// const ingredient = [prompt(`what's your fav meal`),
//   prompt(`Your second fav meal`),
//   prompt(`What do you enjoy eating, aside the first 2 questions`)
// ];
// console.log(ingredient);
//  restaurant.orderPasta(...ingredient);


//  const neRestaurantCopy = { person: 'hi', ...restaurant, founded: 2022 };
//  console.log(neRestaurantCopy);
//  console.log(restaurant);
// /
// const key = [0, 2, 4, 7];
// let [x, y, z, a] =  key;
// console.log(x, y, z, a);

// // --

// const arr = [0, 2, 4, 7];
// let nuArr = [24, 33, ...arr]
// console.log(nuArr);
// console.log(...nuArr);


//  restaurant.mainMenu = [health, ...mainMenu]

// //  shallow copy
// let mainMain = [...restaurant.mainMenu]
// // console.log(mainMain);

// // join 2 arrays together
// let beckyPeters = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(beckyPeters);

// let nuMenu = [...restaurant.mainMenu, 'indomie', 'rice'];
// // console.log(nuMenu);






// / restaurant.orderD ({
//   starty: 0,
//    mainy: 1,
//   time: '2pm', 
//   place: 'Lekki penninsula, Lagos',
//    ambition: 'what i\'d love to become is a professional frontend web developer, with a youtube content education, a recycling startup, bootcamp, and virtual chat/page weekly host'
// })
// restaurant.orderD({
//   starty: 0,
// });











// Calling a method (function) wit an object and passing the object into a function as it's parameters


// nested objects

// DESTRUCTURING OBJ

// const { name, openingHours, categories } = restaurant;
// // OpeningHours already assigned a variable;
// console.log(name, openingHours, categories);

// [Destructuring a Nested Object]

//  const {thu: {open, close}} = openingHours;
// console.log(open, close);

// [Swapping a Destructured Objects name];

// const {thu: {open:a, close:b}} = openingHours;
// // console.log(open, close);
// console.log(a, b);

// // Changing the variable names of an Object . esp, from a third party API call;
// const {name: oruko, openingHours: shishi, categories: sector} = restaurant;
// console.log(oruko, shishi, sector);

// // Also there's a way of setting default values from a third party data(api) that dies not exist.

// const {menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables while destructuring objects

// let a = 9
// let b = 8;

// const jaja = {a:11, b:22, c:120};
// // ({a, b} = jaja);
// console.log(a,b);


// // DESTRUCUTING ARRAYS

// const arr = [1, 3, 4];

// let o = arr[0]
// let b = arr[1]
// let c = arr[2]

// console.log(o,b,c);

// let [x, y, z] = arr;

// console.log(x, y, z);
// let [a, b, c] = [x, y, z];
// // the arr is still valid
// console.log(arr);

// --
// /   const nested = [2, 4, [5, 6]];
//   let [i, ,[j, k]] = nested;
//   console.log(i, j, k);

//   // How we recieve 2 return values from a function
//  const [hey, hi] = restaurant.order(2, 0);
//  console.log(hey, hi);

// Switching without destructuring
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

//  Mutating / Switching with destructuring

//  const [main, data] = [first, second];
//  console.log(data, main);

// let [first, second] = restaurant.categories;
// console.log(first, second);

// [first, second] = [second, first]
// console.log(first, second);