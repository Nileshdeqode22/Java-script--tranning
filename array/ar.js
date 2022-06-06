//arrays

let fruits = ["Apple", "Orange", "Plum"];
console.log( fruits[0] );
console.log( fruits[1] );

//We can replace an element:
fruits[0]="banana";
console.log(fruits);

// length 

console.log(fruits.length)

//An array can store elements of any type.

// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];

// get the object at index 1 and then show its name
console.log( arr[1].name ); // John

// get the function at index 3 and run it
arr[3](); // hello

// at is used get the last elements of array

// same as fruits[fruits.length-1]
console.log( fruits.at(-1) ); // Plum

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* iterating over with for each loop*/

const strings=['arielle', 'are', 'you', 'there']
const captiziledString =[];
for (let i=0;i<strings.length;i+=1){
    const string=strings[i];
    captiziledString.push(string.toUpperCase());

}

console.log(captiziledString)

strings.forEach(function(string){
    captiziledString.push(string.toUpperCase());


})

console.log("for each loop :",captiziledString)

// Array prototype concat
//The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);

// Find method 

// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const array6 = [5, 12, 8, 130, 44];

const found = array6.find(element => element >10);

console.log(found);
// expected output: 12

//Filter 

//The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

//MAP The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const array7 = [1, 4, 9, 16];

// pass a function to map
const map1 = array7.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

/*Flat Map The flatMap() method returns a new array formed by applying a given callback function to each element of the array, 
and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1, 
but slightly more efficient than calling those two methods separately */

let arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]


//Some()
/* The some() method tests whether at least one element in the array passes the test implemented by the provided function. 
It returns true if, in the array, 
it finds an element for which the provided function returns true; 
otherwise it returns false. It doesn't modify the array.*/

const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true

/*
The every() method tests whether all elements in the array pass the test implemented by the provided function. 
It returns a Boolean value.
*/

const isBelowThreshold = (currentValue) => currentValue < 40;

const array8 = [1, 30, 39, 29, 10, 13];

console.log(array8.every(isBelowThreshold));
// expected output: true

//slice 

/*The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
 where start and end represent the index of items in that array. 
The original array will not be modified.*/ 

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());

//Reduce

/*The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". 
If supplied, an initial value may be used in its place.
 Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array: 

*/

const array0 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array0.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10


//Splice 

/*
 The splice() method changes the contents of an array by removing or replacing existing elements and/or 
 adding new elements in place. 
 To access part of an array without modifying it, see slice().
 */

 const months = ['Jan', 'March', 'April', 'June'];
 months.splice(1, 0, 'Feb');
 // inserts at index 1
 console.log(months);
 // expected output: Array ["Jan", "Feb", "March", "April", "June"]
 
 months.splice(4, 1, 'May');
 // replaces 1 element at index 4
 console.log(months);
 // expected output: Array ["Jan", "Feb", "March", "April", "May"]


 //Scope of var


 // program showing block-scoped concept
// global variable
let a = 'Hello';

function greet() {

    // local variable
    let b = 'World';

    console.log(a + ' ' + b);

    if (b == 'World') {

        // block-scoped variable
        let c = 'hello';

        console.log(a + ' ' + b + ' ' + c);
    }

    // variable c cannot be accessed here
    console.log(a + ' ' + b + ' ' + c);
}

greet();

////////////////////////////////////////////////////////////////////////////


 