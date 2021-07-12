function singSong() {
    console.log('do');
    console.log('ra');
    console.log('mi');
}
singSong();
// function with 1 argument/parameter
function greet(name) {
    console.log(`Hello! ${name}`)
}
greet('Tim')
// function with multiple arguments/parameters
function greet2(firName, lasName) {
    console.log(`Hello! ${firName} ${lasName}`)
}
greet2('Tim', 'Lee')

function repeat(str, num) {
    let convertIntoRow = '';
    for (let i = 0; i < num; i++) {
        convertIntoRow += str;
    }
    console.log(convertIntoRow)
}
repeat("hi kk ,", 3)

function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return false;
    }
    let sum = num1 + num2;
    return sum;
}
add(4, 5)
// defind a function and store it to a variable
const add2num = function (x, y) {
    return x + y
}
// defind a function within a function
function callTwice(fun) {
    fun();
    fun();
}
// function use in above function
function rollDice() {
    console.log(Math.floor(Math.random() * 6) + 1)
}
// call function
callTwice(rollDice)

// Returning a function
function makeMyFun() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log('Congrat, you are lucky!')
        }
    }
    else {
        return function () {
            console.log('You need some luck!')
        }
    }
}

//Returing a function that accpet a argument
function makeBetweenFun(min, max) {
    return function (num) {
        return num >= min && num <= max
    }
}

// add functions as propertise on objects, we can call them method
const math = {
    PI: 3.14,
    square: function (num) { return num * num },
    add: function (x, y) { return x + y },
    subtract: function (a, b) { return a - b }
}
// Method 2: add functions as propertise on objects, we can call them method
const math2 = {
    PI: 3.14,
    square(num) { return num * num },
    add(x, y) { return x + y },
    subtract(a, b) { return a - b }
}

//  use "this" to access other properties on the same object
const cat = {
    name: 'Amy',
    color: 'Red',
    age: 3,
    meow() {
        console.log(`This cat name ${this.name} and she is ${this.age} years old.`);
    }
}