/*Promises are the ideal choice for handling asynchronous operations in the simplest manner. 
They can handle multiple asynchronous operations easily and provide better error handling than callbacks and events.
 In other words also, we may say that, 
 promises are the ideal choice for handling multiple callbacks at the same time, thus avoiding the undesired callback hell situation. 
 Promises do provide a better chance to a user to read the code in a more effective and efficient manner especially 
 it that particular code is used for implementing multiple asynchronous operations. 

Benefits of Promises 
Improves Code Readability
Better handling of asynchronous operations
Better flow of control definition in asynchronous logic
Better Error Handling
A Promise has four states: 
fulfilled: Action related to the promise succeeded
rejected: Action related to the promise failed
pending: Promise is still pending i.e. not fulfilled or rejected yet
settled: Promise has fulfilled or rejected
 

//A promise can be created using Promise constructor.
Syntax
var promise = new Promise(function(resolve, reject){
     //do something
});

*/


/*Parameters 
Promise constructor takes only one argument which is a callback function (and that callback function is also referred as anonymous function too).
Callback function takes two arguments, resolve and reject
Perform operations inside the callback function and if everything went well then call resolve.
If desired operations do not go well then call reject.


Promise Consumers
Promises can be consumed by registering functions using .then and .catch methods.

1. then() 
then() is invoked when a promise is either resolved or rejected. It may also be defined as a career which takes data from promise and further executes it successfully.

Parameters: 
then() method takes two functions as parameters. 

First function is executed if promise is resolved and a result is received.
Second function is executed if promise is rejected and an error is received. 
(It is optional and there is a better way to handle error using .catch() method 


Syntax:

.then(function(result){
        //handle success
    }, function(error){
        //handle error
    })
*/    


 promise = new Promise(function(resolve, reject) {
	resolve('JavaScript');
})

promise
	.then(function(successMessage) {
	//success handler function is invoked
		console.log(successMessage);
	}, function(errorMessage) {
		console.log(errorMessage);
	})



    /*
    2. catch() 

catch() is invoked when a promise is either rejected or some error has occurred in execution. 
It is used as an Error Handler whenever at any step there is a chance of getting an error.

Parameters: 
catch() method takes one function as parameter. 

Function to handle errors or promise rejections.(.catch() method internally calls .then(null, errorHandler), 
i.e. .catch() is just a shorthand for .then(null, errorHandler) )
Syntax:

.catch(function(error){
        //handle error
    })
    */

    promise = new Promise(function(resolve, reject) {
        reject('Promise Rejected')
    })
    
    promise
        .then(function(successMessage) {
            console.log(successMessage);
        })
        .catch(function(errorMessage) {
        //error handler function is invoked
            console.log(errorMessage);
        });

//Prmoise rejected

 promise = new Promise(function(resolve, reject) {
	throw new Error('Some error has occurred')
})

promise
	.then(function(successMessage) {
		console.log(successMessage);
	})
	.catch(function(errorMessage) {
	//error handler function is invoked
		console.log(errorMessage);
	});

