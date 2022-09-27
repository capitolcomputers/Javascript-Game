'use strict'

Destructuring Array

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
}

// how to receive 2 values from a function

// const [mainC, jayC] = restaurant.order(2, 2);
// console.log(mainC, jayC);


// // destructuring nested array;
// const nested = [2, 4, [5, 6]];

// const [i, ,[j, k]] = nested;
// console.log(i, j, k);

// // how to set default values to an array

// const [p=1, q=1, r=1, f=1] = [8, 9, 4];

// console.log(p, q, r, f);

Destructuring Object; (lesson 2; section - 9);
// getting objects from an API;
// const {name, openingHours, starterMenu} = restaurant;
// console.log(name,openingHours, starterMenu);

// const {
//   name: jaylo,
//    mainMenu: pappyJay, 
//    starterMenu: jason
//   } = restaurant;

//   console.log(jaylo, pappyJay, jason);

//   const {menu = [], starterMenu: starters = []} = restaurant;

//   console.log(menu, starters);

fetching methods from a function to another fuction

// withou an object option

  orderDelivery: function ({ starterIndex = 0, mainIndex = 1, time = '2pm', date = '26th juune'})
  // Delivery: function ({starterIndex, mainIndex, time, address }) {
  //   console.log(
  //     `order received! ${this.starterMenu [starterIndex]} and ${this.mainMenu[mainIndex]} and will be delivered at ${time} with the right address location at ${address}`);
  // }

  calliing the function:
  // restaurant.Delivery({
//   time: '2pm',
//   address: 'Okoko Maiko ',
//   starterIndex: 0,
//   mainIndex: 2,
// });



restaurant.orderDelivery({
  time: '2pm',
  date: '26th of june',
  starterIndex: 0,
  mainIndex: 2,
});
// withou an object option
restaurant.orderDelivery({
  time: '2pm',
  // date: '26th of june',
  starterIndex: 0,
});

// spread operator

// const newArr = [0, 4, 2];
// moved into a new array via spread operator
// const jayArr = [1, 2, ...newArr];
// console.log(jayArr)
// Totally destructured
// console.log(...jayArr);


// Passing multiple argument into a function thru prompt with spread operator

  //  beckyPeters: function (ing1, ing2, ing3) {
  //    console.log(`come and eat ${ing1} ${ing2}, ${ing3}`);
  //  }
  // const ingredient = [prompt(`what would you like? ingredient 1`),
  // prompt(`ingredient 2`),
  // prompt(`ingredient 3`),
  // ];
  // console.log(ingredient);

  // restaurant.beckyPeters(...ingredient);
  // restaurant.beckyPeters(ingredient[0],ingredient[1], ingredient[2]);

  shallowCopy of Object;

//   const restaurantCopy = {...restaurant}

// restaurantCopy.name = 'jallo baba';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);


rest operator;


//   bisi: function (mili, ...jason) {
//     console.log(mili)
//     console.log(jason)
//   }
// };

// restaurant.bisi ('apple', 'forth', 'cars', 'bulk');
// restaurant.bisi ('mmanny')
// // Rest Operator
//  const arr = [2, 4, 5];
//  const beckyPeters = [...arr]

//  console.log(beckyPeters);

// //  rest pattern; selecting from a object method;

//  const [a, b, ...others] = [1, 3, 4, 5, 6]
//  console.log(a, b, others);

//  const [Pizza, , Risotto, ...otherb] = [
//    ...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(Pizza, Risotto, otherb);


// // Destructuring Object
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays)

// // fan blow

// // pass multiple argument into a function at thhe same time with the rest operator

// // const jay = function (...numbers){
// // console.log(numbers);
// // };

// // jay (2, 4, 7, 9);
// // jay (7, 9);
// // jay (2, 4, 7, 9, 7, 9);

// // Pass multiple aargument into a function and calculate the total;


// const aijalon = function (...beckyPeters) {
//  let sum = 0;
//  for (let i = 0; i < beckyPeters.length; i++)
//  sum += beckyPeters[i]
// console.log(sum);
 
// }

// aijalon (1, 2, 4, 21)
// aijalon (1, 2, 2, 0, 1, 0, 4)
// aijalon (1, 2, 4, 44, 7)
// aijalon (1, 2, 4, 1, 2);
// aijalon (1, 2, 4, 99, 24, 55)
// aijalon (1, 2, 4, 99, 24);

// const x = [1, 2, 5, 0, 9];

// aijalon(...x)