/* Funtions 
  - functions allow us to create reusable code in JavaScript
  The following, are examples of functions
*/
// This is a function declaration
// We called this function square and it takes in a number as a parameter
function square (zahl) {
  // When we call the function an give in a number it will create a console.log
  // with the number we provided multiplied by the number we provided
  console.log( zahl * zahl)
}

// to call a function in JavaScript we just write it's name and use ( )
// inside the ( ) we put in the expected parameter
square(2)

// square(2) call the square function we defined before and use the parameter
// we provided (2). So it will do: console.log(2 * 2)

// This variables are relevant for the next function
var userName = prompt('Your Name')
var userCity = prompt('Your City')

// This is a function we called 'lordify' which expects 2 parameters
// The first parameter is a name and the second one is a city
function lordify (name, city) {
  // The function will concatenate the name and the city together with the word 'of'
  console.log(name + ' of '+ city)
}

// Here we call the function lordify, calling a function activates it
// We give in whatever the user typed in the prompts as parameters
// So userName is the name and user city is the city
lordify(userName, userCity)
// If the user typed 'Tom' in the first prompt and 'London' in the second prompt
// the function will log 'Tom of London' to the console.


/* Arrow Functions */
// An arrow function is an alternative way to write functions
// This way was introduced with ES6

// This is a function called double, it takes in a number (num)
// and multiplies it times 2
// in arrow functions, if we only have one parameter, there is no need to use
// ( ) brackets
// if we only have one line statement, then there is no need for the { } brackets

var double = num => num * 2;

// This is a function we called mult which takes in 2 numbers
// Since we have more than one parameter, we still need to use ( )brackets
var mult = (num1, num2) => num1 * num2;

// This function called example takes in a parameter called word
// in this case we need to use the { } brackets for our statement,
// because it has multiple statements
var example = word => {
  if(word != 'piranha'){
    console.log(word)
  }
}


/* More alternative ways to write function */

/* if a function is saved in a variable like this, it is called a 
  function expression
  Here are a couple of differences between a function expression and a function
  declaration: 
  * Function expressions in JavaScript are not hoisted, this means we need
  to call the function after we declare it!
  * Function name can be omitted in function expressions to create anonymous functions
*/

var lordify2 = function(name){
  console.log('Hello ' + name + ' of Cambury')
}

console.log(lordify2('Martin'))


// Functions have something called scope,
// for now you can think of scope as the reach of a function,
// or a variable in a function

function square ( num ) {
  // The scope of the variable message is restricted to this function
  var message = 'Foo'
  return num * num
}
// trying to call message outside of the function will not work
console.log(message)


// Function declarations are hoisted, this basically means that JS
// automatically moves them to the top
// This allows us to call a function before it is declared!
console.log(lordify3('Dave', 'Berlin'))
function lordify3 (name, city) {
  //console.log(name + ' of '+ city)
  var text = ' of '
  var message = name + text + city;
  return message;
}


