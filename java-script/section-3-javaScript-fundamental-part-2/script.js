"use strict";
// #Function Declaritions
    // function calcAge1(birthYear) {

    //     return 2037 - birthYear;;
    // }
    // const age1 = calcAge1(2000);

// #Function Expression
    // const calcAge2 = function (birthYear) {

    //     return 2037 - birthYear;
    // }
    // const age2 = calcAge2(2001);
    // console.log(age1, age2);

// What is differents declartions and expression function?
// Ans: When you const before set Declarition function running but Expression function show error "Cannot access before initialization". Because of a process called hoisting.


// #Arrow Function
    // const calcAge1 = birthYear => 2037 - birthYear;

    // const age1 = calcAge1(1995);
    // console.log(age1);

    // const yearsUntilRetirement = (birthYear, firstName) => {
    //     const age = 2037 - birthYear;
    //     const retirement = 70 - age;

        //return retirement;
    //     return `${firstName} retires in ${retirement}`
    // }
    // console.log(yearsUntilRetirement(1990, 'Dhiman'));
    // console.log(yearsUntilRetirement(1995, 'Barua'));

// #Function Calling other function

    // function cutFruitPieces(fruit) {
    //     return fruit * 4;
    // }

    // function fruitProcessor(apples, oranges) {
        
    //     const applePieces = cutFruitPieces(apples);
    //     const orangePieces = cutFruitPieces(oranges);

    //     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
    //     return juice;
    // }
    // console.log(fruitProcessor(6, 5));
    
// #Reviewing Functions
    // const calcAge = function (birthYeah) {
    //     return 2037 - birthYeah;
    // }
    
    // const yearsUntilRetirement = function (birthYeah, firstName) {
    //     const age = calcAge(birthYeah);
    //     const retirement = 65 - age;
    
    //     if (retirement > 0) {
    //     console.log(`${firstName} retires in ${retirement} years`);
    //         return retirement;
    //     } else {
    //     console.log(`${firstName} has already retired 🎉`);
    //         return -1;
    //     }
    // }
    
    // console.log(yearsUntilRetirement(1991, 'Jonas'));
    // console.log(yearsUntilRetirement(1950, 'Mike'));

// #Object References in Practice ( Shallow vs. Deep Copies )

    // const jessica = {
    //     firstName: 'Jessica',
    //     lastName: 'Willams',
    //     age: 27,
    // }
// console.log(jessica);

    // function marryPerson(orginalPerson, newPerson) {
    //     orginalPerson.lastName = newPerson;
        
    //     return orginalPerson;
    // }
    
    // const marriedJessica = marryPerson(jessica, 'Davis');
    // console.log(marriedJessica);
    
    // const jessica2 = {
    //     firstName: 'Jessica',
    //     lastName: 'Willams',
    //     age: 27,
    //     family: ['Alic', 'Bob']
    // }

    // Shallow Copy
    // const jessica2Copy = { ...jessica2 }
    // jessica2Copy.lastName = 'David';
    
    // jessica2Copy.family.push('Mary');
    // jessica2Copy.family.push('Jony');
    // console.log('Before', jessica2);
    // console.log('After', jessica2Copy);
    
    // Deep Copy/clone
    // const jessicaClone = structuredClone(jessica2);
    // jessicaClone.family.push('Mary');
    // jessicaClone.family.push('Jony');
    // console.log('Before', jessica2);
    // console.log('After', jessicaClone);
    
    // const marriedJessica = jessica;
    // marriedJessica.lastName = 'Davis';
    
    // console.log('Before', marriedJessica);
    // console.log('After', jessica);

// #Destructuring Arrays

    // const restaurant = {
    //     name: 'Classico Italiano',
        
    //     location: 'Via Angelo Tavanti 23, Firenze, Italy',
        
    //     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        
    //     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        
    //     mainMenu: ['Pizza', 'Pesta', 'Risotto'],


//     order: function (starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
//     }
// };

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching Variables
// const temp = main;
// main = secondary
// secondary = temp;
// console.log(main, secondary);

// [secondary, main] = [main, secondary]
// console.log(main, secondary);

// Receive 2 return values from a function
// const [starterMenu, mainMenu] = restaurant.order(2, 0);
// console.log(starterMenu, mainMenu);

// Nested destructuring
    // const nested = [2, 4, [5, 6]];
    // const [i, , j] = nested;
    // console.log(i, j);
    // const [i, , [j, k]] = nested
    // console.log(i, j, k);

// Default values
    // const [p =1, q =1, r =1] = [8, 9]
// console.log(p, q, r);


const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [days[3]]: {
      open: 12,
      close: 22,
  },
  [days[4]]: {
      open: 11,
      close: 23,
  },
  [days[5]]: {
      open: 0,
      close: 24,
  }
}

// #Destructuring Objects

    const restaurant = {
        name: 'Classico Italiano',
        
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        
        mainMenu: ['Pizza', 'Pesta', 'Risotto'],
        
        //ES6 enhanced object literals
        openingHours,

        order(starterIndex, mainIndex) {
            return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
        },

        orderPizza(mainIngredient, ...otherIngredients) {
            console.log(mainIngredient);
            console.log(otherIngredients);
        }
};

//Property keys
for (const day of Object.keys(openingHours)){
 console.log(day);
}
// Property Values
const objectValues = Object.values(openingHours);
console.log(objectValues);

// Entire object
const entires = Object.entries(openingHours);

for (const [key, {open, close}] of entires){
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// With optional chaining
//console.log(restaurant.openingHours.mon?.open);

for (const day of days){
  //console.log(day);
  restaurant.openingHours[day]
  //openingHours.mon
}
// Arrays

// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }]
const users = []

console.log(users[0]?.name ?? 'User array empty');

    
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

// //for (const item of menu) console.log(item);
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// } 
///console.log([...menu.entries()]);
    
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
//restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
//restaurant.orderPizza('mushrooms');

  const {sat, ...weekdays} = restaurant.openingHours;
  console.log(weekdays);
const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      genres: [
        "fantasy",
        "high-fantasy",
        "adventure",
        "fiction",
        "novels",
        "literature",
      ],
      hasMovieAdaptation: true,
      pages: 1216,
      translations: {
        spanish: "El señor de los anillos",
        chinese: "魔戒",
        french: "Le Seigneur des anneaux",
      },
      reviews: {
        goodreads: {
          rating: 4.52,
          ratingsCount: 630994,
          reviewsCount: 13417,
        },
        librarything: {
          rating: 4.53,
          ratingsCount: 47166,
          reviewsCount: 452,
        },
      },
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      genres: [
        "science fiction",
        "humor",
        "speculative fiction",
        "short stories",
        "fantasy",
      ],
      hasMovieAdaptation: false,
      pages: 295,
      translations: {},
      reviews: {
        goodreads: {
          rating: 4.16,
          ratingsCount: 11663,
          reviewsCount: 812,
        },
        librarything: {
          rating: 4.13,
          ratingsCount: 2434,
          reviewsCount: 0,
        },
      },
    },
    {
      id: 3,
      title: "Dune",
      publicationDate: "1965-01-01",
      author: "Frank Herbert",
      genres: ["science fiction", "novel", "adventure"],
      hasMovieAdaptation: false,
      pages: 658,
      translations: {
        spanish: "",
      },
      reviews: {
        goodreads: {
          rating: 4.25,
          ratingsCount: 1142893,
          reviewsCount: 49701,
        },
      },
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      publicationDate: "1997-06-26",
      author: "J. K. Rowling",
      genres: ["fantasy", "adventure"],
      hasMovieAdaptation: true,
      pages: 223,
      translations: {
        spanish: "Harry Potter y la piedra filosofal",
        korean: "해리 포터와 마법사의 돌",
        bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
        portuguese: "Harry Potter e a Pedra Filosofal",
      },
      reviews: {
        goodreads: {
          rating: 4.47,
          ratingsCount: 8910059,
          reviewsCount: 140625,
        },
        librarything: {
          rating: 4.29,
          ratingsCount: 120941,
          reviewsCount: 1960,
        },
      },
    },
    {
      id: 5,
      title: "A Game of Thrones",
      publicationDate: "1996-08-01",
      author: "George R. R. Martin",
      genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
      hasMovieAdaptation: true,
      pages: 835,
      translations: {
        korean: "왕좌의 게임",
        polish: "Gra o tron",
        portuguese: "A Guerra dos Tronos",
        spanish: "Juego de tronos",
      },
      reviews: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 2295233,
          reviewsCount: 59058,
        },
        librarything: {
          rating: 4.36,
          ratingsCount: 38358,
          reviewsCount: 1095,
        },
      },
    },
];


// function getDatas() {
//     return data;
// }

function getData(id) {
    
    return data.find((d) => d.id === id);
}


const book = getData(5);
//console.log(book);

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;
console.log(author, title, genres);

const [firstGenre, secondGenre, ...otherGenres] = genres;
console.log(firstGenre, secondGenre, otherGenres);

const newGenres = [...genres, 'epic fantasy'];
console.log(newGenres);

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonFood = italianFoods.intersection(mexicanFoods);
console.log(commonFood);
console.log([...commonFood]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log(italianMexicanFusion);
console.log([...new Set([...italianFoods, ...mexicanFoods])]);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Unique Italian Foods: ', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Unique Mexican Foods: ', uniqueMexicanFoods);

const uniqueItalianAndMexicanFoods = italianFoods.symmetricDifference(mexicanFoods);
console.log('Symmetric Difference: ', uniqueItalianAndMexicanFoods);
console.log(italianFoods.isDisjointFrom(mexicanFoods));

const italian = [
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
];

const mexican = [
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
];

const uniqueData = [...new Set([...italian, ...mexican])];
console.log(uniqueData);
for (const data of uniqueData) console.log(`Unique Data: ${data}`);

const commonData = italian.filter(item => mexican.includes(item));
for (const data of commonData) console.log(`Common Data: ${data}`);

            //Quiz App 👍
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

          console.log(question);
          console.log(question.get('question'));
          for (const [key, value] of question ) {
            if( typeof key === 'number') console.log(`Answer ${key}: ${value}`)
          }
          
