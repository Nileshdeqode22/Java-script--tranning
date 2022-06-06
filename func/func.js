
//function 
function nameOfFunction () {
    // function body   
}

// declaring a function named greet()
function greet() {
    console.log("Hello there");
}

greet();

// program to add two numbers using a function
// declaring a function
function add(a, b) {
    console.log(a + b);
}

// calling functions
add(3,4);
add(2,9);

//Callback Func
/*In JavaScript, you can also pass a function as an argument to a function. 
This function that is passed as an argument inside of another function is called a callback function. */


// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback;
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);

//this Keyword 

//this keyword refers to the object where it is called.

function Person() {

    this.name = 'Jack';
    console.log(this);

}

let person1 = new Person();
console.log(person1.name);

/* Arrow function is one of the features introduced in the ES6 version of JavaScript. 
It allows you to create functions in a cleaner way compared to regular functions.*/

// function expression
let x = function(x, y) {
    return x * y;
 }

 // using arrow functions
let x1 = (x, y) => x * y;

//Arrow Function with No Argument
let greet1 = () => console.log('Hello');
greet1(); // Hello

// Arrow Function as an Expression

let age = 5;

let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome(); // Baby

// Multiline Arrow Functions
let sum = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum(5,7);
console.log(result1); // 12

/*The prototype is an object that is associated with every functions and objects by default in JavaScript, 
where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.
 Every function includes prototype object by default. */
