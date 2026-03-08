"use strict";

// #Default Parameters
// const bookings = [];

// const createBooking = function (
//     flightNum,
//     numPassenger = 3,
//     price = 199 * numPassenger,
// ) {

//     //ES5
//     // numPassenger = numPassenger || 2;
//     // price = price || 200;
//     const booking = {
//         flightNum,
//         numPassenger,
//         price
//     }
//     // console.log(booking);
//     // bookings.push(booking);
// }

// createBooking('LTD24');
// createBooking('LTD25', 2, 700);
// createBooking('LTD26', 3);
// createBooking('LTD27', undefined, 200);

// #How Passsing Arguments Works: Values vs Reference

// const flight = 'LH234';
// const john = {
//     name: 'John Kobir',
//     passport: 2345678
// }

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;
    
//     if (passenger.passport === 2345678) alert('Checked In');
//     else alert('Wrong Passport');
// }

// checkIn(flight, john);
// console.log(flight);
// console.log(john);

// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 10000000000)
// }

// newPassport(john);
// checkIn(flight, john);


// #First-Class and High Order Functions
const high5 = function () {
    console.log('Hello, High Five');
};
document.body.addEventListener('click', high5);


// #Funtion returning functions
// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     };
// };
// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('John');

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('Hi')('Ashik')

// #The Call and apply Methods

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    }
}
lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book;

//Does Not Work
// book(23, 'Sarah Willimas');
// Call Method
book.call(eurowings, 23, 'Sarah Willimas');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air line',
    iataCode: 'SW',
    bookings: []
}

book.call(swiss, 580, 'Hamza Chowdhury');


// Apply method
const flightData = [580, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);

bookEW(23, 'Steven Williams');
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
}
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

// Partial applied
const addTax = (rate, value) => value + value * rate;
console.log(addTax(2, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate
    };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT(100));
console.log(addVAT(23));

// Immediately Invoked Function Expression (IIFE)
const runOnce = function () {
    console.log('This will never run again');
}
runOnce();

(function () {
    console.log('This will never run again');
    const isPrivate = 23;
})();
//console.log(isPrivate);
(() => console.log('This will also never run again'))
();

{
    const isPrivate = 23;
    var notPrivate = 46;
}
//console.log(isPrivate);
console.log(notPrivate);

// #Closures

const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;

        console.log(`${passengerCount} passengers`);
    }
}
const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

let f;

const g = function () {
    let a = 23;

    f = function () {
        console.log(a * 2);
    }
}
g()
f();

// Example 2
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
}
//const perGroup = 1000;
boardPassengers(180, 3);
