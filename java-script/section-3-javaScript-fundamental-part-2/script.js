
// Function Declaritions
    // function calcAge1(birthYear) {

    //     return 2037 - birthYear;;
    // }
    // const age1 = calcAge1(2000);

// Function Expression
    // const calcAge2 = function (birthYear) {

    //     return 2037 - birthYear;
    // }
    // const age2 = calcAge2(2001);
    // console.log(age1, age2);

// What is differents declartions and expression function?
// Ans: When you const before set Declarition function running but Expression function show error "Cannot access before initialization". Because of a process called hoisting.


// Arrow Function
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

// Function Calling other function

    function cutFruitPieces(fruit) {
        return fruit * 4;
    }

    function fruitProcessor(apples, oranges) {
        
        const applePieces = cutFruitPieces(apples);
        const orangePieces = cutFruitPieces(oranges);

        const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
        return juice;
    }
    console.log(fruitProcessor(6, 5));