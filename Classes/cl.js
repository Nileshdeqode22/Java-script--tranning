//Class in javascript
 
//A class is a blueprint for the object. You can create an object from the class.

// creating a class
class Person {
    constructor(name) {
      this.name = name;
    }
  }

  

// creating an object
const person1 = new Person('John');
const person2 = new Person('Jack');

console.log(person1.name); // John
console.log(person2.name); // Jack

//While using constructor function, you define methods as:

// constructor function
function Person5 (name) {

   // assigning  parameter values to the calling object
    this.name = name;

    // defining method
    this.greet = function () {
        return ('Hello' + ' ' + this.name);
    }
}


//Getters and Setters

class Person {
    constructor(name) {
        this.name = name;
    }

    // getter
    get personName() {
        return this.name;
    }

    // setter
    set personName(x) {
        this.name = x;
    }
}

let person3 = new Person('Jack');
console.log(person3.name); // Jack

// changing the value of name property
person3.personName = 'Sarah';
console.log(person3.name); // Sarah