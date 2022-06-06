/*The bind() method creates a new function that, when called, has its this keyword set to the provided value  */
var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

 pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + 'I choose you!');
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

let logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon('sushi', 'algorithms'); // 'Pika Chu I choose you!'


//Call(),Apply()

/*The call() method calls a function with a given this value and arguments provided individually.

    The main differences between bind() and call() is that the call() method:

    Accepts additional parameters as well
    Executes the function it was called upon right away.
    The call() method does not make a copy of the function it is being called on.
    call() and apply() serve the exact same purpose. The only difference between how they work is that call() 
    expects all parameters to be passed in individually,
    whereas apply() expects an array of all of our parameters.  
*/


var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms

let name1= pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms





