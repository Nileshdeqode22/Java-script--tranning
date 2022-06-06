
//data type whose instances are unique and immutable	

let value = Symbol('hello');
let value2 = Symbol('hello');
console.log(value);

value =Symbol('hello2');
console.log(value);
console.log(value === value2); // false


let name;
console.log(name); // undefined

 /* this is
an multi -line
comment */


// type coversion
console.log("******Type conversion******"); // string
let num = String(6)
console.log(num,typeof num);

// Coercion
console.log("******Coercion******");
let x
console.log(x,typeof x);
x=8
console.log(x,typeof x);
x=x+""
console.log(x,typeof x);
x=x-2
console.log(x,typeof x);

//Opertors 
console.log("******Operators******");
let y=10
console.log(y,typeof y);
result1=y+2
console.log("addition is =",result1,typeof result1);
result2=y-2
console.log("substraction is =",result2,typeof result2);
result3=y*2
console.log("multiplication is =",result3,typeof result3);
result4=y/2
console.log("divison is =",result4,typeof result4);
result5=y%2
console.log("reminder is =",result5,typeof result5);

//relational operators
console.log("******Relational operators******");
let a=10
let b=20
console.log(a,b);
console.log(a>b);
console.log(a<b);
console.log(a==b);
console.log(a!=b);
console.log(a===b);
console.log(a!==b);

// logical operators

console.log("******Logical operators******");
let c=10
let d=20
console.log(c,d);
console.log(c>d || c<d);
console.log(c>d && c<d);
console.log(!(c>d));

// conditional operators

 
console.log("******Conditional operators******");
let e=10
let f=20

console.log(e,f);
if (e>f) {
    console.log("e is greater than f");
}
else if (e<f) {
    console.log("e is less than f");
}
else {
    console.log("e is equal to f");
}

//ternary operator
 
console.log("******Ternary operator******");
let number =8
let result = number>5 ? "number is greater than 5" : "number is less than 5";
console.log(result);

// switch case

let day = "sunday";
switch (day) {
    case "sunday":
        console.log("its sunday");
        break;
    case "monday":
        console.log("its monday");
        break;
    case "tuesday":
        console.log("its tuesday");
        break;
    case "wednesday":
        console.log("its wednesday");
        break;
    case "thursday":
        console.log("its thursday");
        break;
    case "friday":
        console.log("its friday");
        break;
    case "saturday":
        console.log("its saturday");
        break;
    default:
        console.log("its not a day");
        break;
}

//template literals

console.log("******Template literals******");

let num1=9
let num2=10
let result6=`the addition of ${num1} and + ${num2} is  = ${num1+num2}`
console.log(result6);

//while loop

console.log("******While loop******");

let number1=1

while(number1<=10){
    console.log("hello");
    number1++;
}

// do while loop

console.log("******Do while loop******");

let number2=1

do {
    console.log("hello");
    number2++;
}while(number2>=10);

//for loop

console.log("******For loop******");

for(let i=1;i<=10;i++){
    console.log("hello");
}

let number9 =10
console.log(number9,typeof number9);



//objects
const student = {
    firstName: 'ram',
    class: 10
};

console.log(student);
console.log(student.firstName);

// object creation
const person = { 
    name: 'John',
    age: 20
};
console.log(typeof person); // object


// nested object
const student2 = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

// accessing property of student object
console.log(student2.marks); // {science: 70, math: 75}

// accessing property of marks object
console.log(student2.marks.science); // 70

const person1 = {
    name: 'Sam',
    age: 30,
    // using function as a value
    greet: function() { console.log('hello') }
}

person1.greet(); // hello





