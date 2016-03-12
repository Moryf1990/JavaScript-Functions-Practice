/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

//       forEach(myArray, sumTotal);
function forEach(array, callback){    
    // console.log(array, callback);
    for(var i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

// testing your code with console.assert
var total = 1;
var myArray = [1, 2, 3, 4,];
function multiplyTotal(a) {
    total *= a;
}
forEach(myArray, multiplyTotal);
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
   
    // parse arguments into an array
    var args = [].slice.call(arguments);
     // console.log(args);
    // .. do something with each element of args
    // YOUR CODE HERE
    var total = 0;
    for (var i = 0; i < args.length; i++) {
        total += args[i]
    }
    return total;
}



console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    // console.log(args);

    // .. do something with each element of args
    // YOUR CODE HERE
    var total = 0;
    

    for (var i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total/args.length;
    // var avg = total/args.length;
    // return avg;
}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    console.log(arguments);


    // .. do something with each element of args
    // YOUR CODE HERE
     var largestNumber = 0;
    for (var i = 0; i < args.length; i++) {
        if(args[i] > largestNumber) {
            largestNumber = args[i]
        }
    }
    return largestNumber;
}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    // console.log(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    // var str = string.split(' ');
    var longestString = 0;
    var word = null;
    for (var i = 0; i < args.length; i++) {
        if (longestString < args[i].length) {
            longestString = args[i].length;
            word = args[i];
        }
    }
    return word;
}

 console.assert( longest('this', 'is', 'a', 'awesome', 'function') === 'function' );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()
var myArray = ['toyota', '1chevy', 'Dodge', 'Ford', 'bmw', 'buick'];
myArray.sort();
console.log(myArray);

console.assert( myArray.sort()[0] === '1chevy');
console.assert( myArray.sort()[1] === 'Dodge');
console.assert( myArray.sort()[2] === 'Ford');
console.assert( myArray.sort()[3] === 'bmw');
console.assert( myArray.sort()[4] === 'buick');
console.assert( myArray.sort()[5] === 'toyota');

console.assert( myArray.sort().length === 6);

// .concat()
var football = ['Giants', 'Patriots', 'Cowboys'];
var baseball = ['Yankees', 'Red Sox', 'Rangers'];
var basketball = ['Rockets', 'Mavericks', 'Spurs'];
var sports = football.concat(baseball, basketball);
console.log(sports);

console.assert( sports.length === 9);
console.assert( sports[0] === 'Giants');
console.assert( sports[1] === 'Patriots');
console.assert( sports[2] === 'Cowboys');
console.assert( sports[3] === 'Yankees');
console.assert( sports[4] === 'Red Sox');
console.assert( sports[5] === 'Rangers');
console.assert( sports[6] === 'Rockets');
console.assert( sports[7] === 'Mavericks');
console.assert( sports[8] === 'Spurs');

// .indexOf()
var array = ['toyota', 'chevy', 'ford'];
console.log(array.indexOf('ford'));

console.assert( array.indexOf('toyota') === 0);
console.assert( array.indexOf('chevy') === 1);
console.assert( array.indexOf('ford') === 2);
console.assert( array.indexOf('bmw') === -1);

// .split()
var string = 'Hello World';
var splitString2 = string.split('', 3);
console.log(splitString2);
var splitString3 = string.split(' ');
console.log(splitString3);
var splitString = string.split('');
console.log(splitString);

console.assert( splitString[0] === 'H');
console.assert( splitString[1] === 'e');
console.assert( splitString[2] === 'l');
console.assert( splitString[3] === 'l');
console.assert( splitString[4] === 'o');
console.assert( splitString[5] === ' ');
console.assert( splitString[6] === 'W');
console.assert( splitString[7] === 'o');
console.assert( splitString[8] === 'r');
console.assert( splitString[9] === 'l');
console.assert( splitString[10] === 'd');

// .join()
var myArray = ['Spurs', 'Mavericks', 'Rockets'];
var joinThis = myArray.join(', ');
console.log(joinThis);

console.assert( joinThis[0] === 'S');
console.assert( joinThis[1] === 'p')
console.assert( joinThis[2] === 'u');
console.assert( joinThis[3] === 'r');
console.assert( joinThis[4] === 's');
console.assert( joinThis[5] === ',');
console.assert( joinThis[6] === ' ');
console.assert( joinThis[7] === 'M');
console.assert( joinThis[8] === 'a');
console.assert( joinThis[9] === 'v');

// .pop()
var cities = ['Austin', 'Dallas', 'San Antonio', 'Houston', 'Corpus Christi'];
console.log(cities);
var remove = cities.pop();
console.log(cities);
console.log(remove);

console.assert( cities.length === 4);

// .push()
var cities = ['Austin', 'Dallas', 'San Antonio'];
var moreCities = cities.push('Houston', 'Corpus Christi');
console.log(cities);
console.log(moreCities);

console.assert( cities.length === 5);
console.assert( cities[0] === 'Austin');
console.assert( cities[1] === 'Dallas');
console.assert( cities[2] === 'San Antonio');
console.assert( cities[3] === 'Houston');
console.assert( cities[4] === 'Corpus Christi');

// .slice()
var teams = ['Mavericks', 'Spurs', 'Rockets', 'Grizzlies', 'Cavaliers', 'Lakers'];
var sliceTeams = teams.slice(1, 4);
console.log(sliceTeams);
console.log(teams);

console.assert( sliceTeams[0] === 'Spurs');
console.assert( sliceTeams[1] === 'Rockets');
console.assert( sliceTeams[2] === 'Grizzlies');

var string = 'Hello World, this is my string.'
var string2 = string.slice(2, -4);
console.log(string2);

console.assert( string2[0] === 'l');
console.assert( string2[1] === 'l');
console.assert( string2[2] === 'o');
console.assert( string2[3] === ' ');
console.assert( string2[4] === 'W');
console.assert( string2[5] === 'o');
console.assert( string2[6] === 'r');
console.assert( string2[7] === 'l');
console.assert( string2[8] === 'd');
console.assert( string2[9] === ',');
console.assert( string2[10] === ' ');
console.assert( string2[11] === 't');

// .splice()
var teams = ['Mavericks', 'Spurs', 'Rockets', 'Grizzlies', 'Cavaliers', 'Lakers',];
console.log(teams);
var removeTeams = teams.splice(3, 2);
console.log(removeTeams);
console.log(teams);


console.assert( removeTeams[0] === 'Grizzlies');
console.assert( removeTeams[1] === 'Cavaliers');
console.assert( teams[0] === 'Mavericks');
console.assert( teams[1] === 'Spurs');
console.assert( teams[2] === 'Rockets');
console.assert( teams[3] === 'Lakers');

// .shift()
var cars = ['toyota', 'chevy', 'ford', 'nissan', 'acura', 'bmw'];
console.log(cars);
var shiftCars = cars.shift();
console.log(cars);
console.log(shiftCars);

console.assert( shiftCars === 'toyota');
console.assert( cars[0] === 'chevy');
console.assert( cars[1] === 'ford');
console.assert( cars[2] === 'nissan');
console.assert( cars[3] === 'acura');


// .unshift()
var numbers = [1, 2, 3];

numbers.unshift(0, 4);
console.log(numbers);

var cars = ['toyota', 'chevy', 'ford', 'nissan', 'acura', 'bmw'];
cars.unshift('audi');
console.log(cars);

console.assert( numbers[0] === 0);
console.assert( numbers[1] === 4);
console.assert( numbers[2] === 1);
console.assert( numbers[3] === 2);
console.assert( numbers[4] === 3);

console.assert( cars[0] === 'audi');
console.assert( cars[1] === 'toyota');
console.assert( cars[2] === 'chevy');
console.assert( cars[3] === 'ford');
console.assert( cars[4] === 'nissan');
console.assert( cars[5] === 'acura');
console.assert( cars[6] === 'bmw');



// .filter()
function filterThis(number) {
  return number >= 10;
}
var myNumbers = [20, 10, 5, 4, 30].filter(filterThis);

console.log(myNumbers);

console.assert( myNumbers[0] === 20);
console.assert( myNumbers[1] === 10);
console.assert( myNumbers[2] === 30);

// .map()
var myNumbers = [10, 20, 30];
var doubleNumbers = myNumbers.map(function(number) {
  return number * 2;
});

console.log(doubleNumbers);

console.assert( doubleNumbers[0] === 20);
console.assert( doubleNumbers[1] === 40);
console.assert( doubleNumbers[2] === 60);

