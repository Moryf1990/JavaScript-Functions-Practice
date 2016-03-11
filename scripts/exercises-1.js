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

// .concat()

// .indexOf()

// .split()

// .join()

// .pop()

// .push()

// .slice()

// .splice()

// .shift()

// .unshift()

// .filter()

// .map()

