/* Declaring variables post ES6 */

// Declaring a variable before ES6 was simply done withe the var keyword
// Now we have different options to help us with scope

/* * * * CONST * * * */

// A constant is a variable that cannot be changed

// Before:
var pizza = true;
pizza = false;
console.log(pizza); 
// Result is false

// Now

const pie = true;
//pie = false;
console.log(pie);
// Gives out a TypeError

/* * * * LET * * * */

// Lexical variable scoping, a variable with scope

// old 
var topic = "Javascript";

if( topic ) {
    var topic = "React"
    console.log('Block', topic)
}
console.log( 'Global', topic)

// The content inside the if block will reset the value of topic, regardless of the scope

// new
let foo = "Foo";

if (foo) {
    let foo = "Bar";
    console.log( 'Block' , foo);
}
console.log('Global', foo);

// With let the content inside the if block is scoped and will only apply to the the block



