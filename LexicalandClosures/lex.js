/*What is Lexical Scope in JavaScript?
Lexical scope describes how nested (also known as "child") functions have access to variables defined in parent scopes. 
In JavaScript, people often confuse closures with lexical scope.

Lexical scope is an important part of closures, but it is not a closure by itself.

Closures are an advanced concept that is also a frequent topic of technical interviews.

You should have a foundational understanding of functions before attempting to understand closures.
*/

const Myfunction=()=>{
    let myValue=2;
    console.log(myValue);

    const childFunction=()=>{
        console.log(myValue+1);
    }
    childFunction();


}

Myfunction()

//What is a Closure in JavaScript?

/*A closure is a function having access to the parent scope, even after the parent function has closed.
Let's note the first part of the sentence before the comma:

...a function having access to the parent scope
That's describing lexical scope!

But we need the second part of the definition to give an example of a closure...

...even after the parent function has closed. */

const myFunction = () => {
    let myValue = 2;
    console.log(myValue);

    const childFunction = () => {
         console.log(myValue += 1);
    }

    return childFunction;
}

const result = myFunction();
console.log(result);
result();
result();
result();


