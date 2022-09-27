'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};




const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },




//   printGoals: function (...players) {
// console.log(`${players.length} number of goals were scored`);
//   }
};

  
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// const event = ;
// const jay = ([...gameEvents])
// console.log(jay);

// const jay = new Map ([])
// console.log(jay);


const events = [...new Set(gameEvents.values())]
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

const time = [...gameEvents.keys()].pop()
console.log(time);

console.log(
  `An event happened, on average, every ${ time / gameEvents.size } minutes `
);


for (const [key, events] of gameEvents) {

  let data = key <= 45 ? 'FIRST' : 'SECOND' ;
  console.log(`[${data} HALF] ${key}: ${events}`);
}
// game.printGoals('Davies', 'Kimmich');
// game.printGoals (...game.scored)
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays)

// new  class challenge;
// const goalScorers = [...game.scored]
// console.log(goalScorers);

// for (const [i, player] of game.scored.entries()) {
//   console.log(` Goal ${i + 1}: ${player}.`);
// };
// const odds = [...game.odds]

// const job = game.odds ?. team1  / 3;
// console.log(job);
// const job2 = game.odds?.team2 || 'none' 
// console.log(job2);
// const job3 = game.odds?.x || 'none';
// console.log(job3);

// const mainValue = Object.values(game) 

//  const data = Object.entries ({...game.odds});
// //  console.log(data);

// let calcAverage

// for (const [key, value] of data) {
 
// console.log(`${value / 3} `);
// }


// for (const [key, value] of data) {
//  console.log(`odd of ${key} is ${value}`)
// }

// const {team1: Bayern, x, team2: Borrussia} = game.odds;
// const open = game.odds?.Bayern
// console.log(open);

//  let cod = {...Bayern, ...x, ...Borrussia}
 
//  const nested = {...cod}
// /   const nested = [2, 4, [5, 6]];
//   let [i, ,[j, k]] = nested;
//   console.log(i, j, k);

//  console.log(cod);

// for (const [key, value] of data) {
//  console.log(`odd of ${key} is `)
// }

// console.log(game.odds?);
// const {thu: {open:a, close:b}} = openingHours;
// // console.log(open, close);
// console.log();

  // console.log([...playersName.entries()]);

//  Class challenge;
  // const { odds: {team1, x: draw, team2} } = game; //or game.odds 
//   console.log(team1, draw, team2)
// // 1
// const [player1, player2] = game.players
// // console.log(player1, player2);
//   const jeay = [...player1, ...player2]
//   for (const tit of jeay.entries()) {
    
//     // console.log(tit);
//   }
//   console.log([...jeay.entries()]);
// // // 2
//  const [gk, ...others] = player1
// // console.log(gk, others);

// // // 3
// const allPlayers = [...player1, ...player2];
// // console.log (allPlayers)

// // // 4

// const players1final = [...player1, 'contin', 'jay', 'femi']
// // console.log(players1final);

// // // 5
//   const { odds: {team1, x: draw, team2} } = game; //or game.odds 
//   console.log(team1, draw, team2);

// // 6


// // 7
// if statement
// if (team1 < team2) {
//   console.log(`team 1 is more likely to win`);
// }
// // ternary operator
//  const gee = team1 < team2 ? `team 1 is more likely to win` : 1;
//  console.log(gee);

// // short circuit
// team1 < team2 && console.log(`team 1 is more likely to win`);

// // ll
// team1 < team2 && team1 < team2(`hey`);
// console.log(team1 < team2);
// restaurant.Delivery || restaurant.Delivery('aijalon');
// console.log(restaurant.Delivery);

// const lowerOdd = team1 || team2;
// console.log(lowerOdd);

// // const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// const guest2 = restaurant.name ?? 10;

// // console.log(guest1);
// console.log(guest2);

// const [Neuer, ...play] = [...game.players];
//  game.team1 = [Neuer, play]
// console.log(team1);
// console.log(Neuer, play);

// const [pizza, ...otherFood] = [...restaurant.mainMenu];
// console.log(pizza, otherFood);
// 4
// [players1final] = []


// let [first, main] = playerArr;

// console.log(first, main);


//  [first, main] = [main, first] 
//  console.log(first, main);

// 7;

// //  the || operator, seee it as one that's exist to search for only truthy, and if there's none, it selects the first falsy value;

// // console.log (77 && 'aijalon' && 77 && 'aijalon' && null && '' && 0 && undefined);

// // restaurant.numGuest = 0;
// restaurant.name = null;

// // const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// const guest2 = restaurant.name ?? 10;

// // console.log(guest1);
// console.log(guest2);

// TODOPLEASE
// if (restaurant.Delivery) {
//   restaurant.Delivery('aijalon');
// }
// // console.log(restaurant.Delivery);

// // const bee = restaurant.

// restaurant.Delivery || restaurant.Delivery('aijalon');
// console.log(restaurant.Delivery);