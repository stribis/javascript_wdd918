// 1. Create a 'double' function which will take in a number (n) and return double it's value

function multi (n){
  return n * 2
}

console.log(multi( 7 ))

// 2. Create a function that takes in a number (age) as an argument and returns a message that tells you that age in dog years! 
//    (one human year = seven dog years)

function dogYears (age) {
  return age * 7
}

console.log(dogYears( 7 ))
// 3. Create a function that will convert a value from celcius to fahrenheit and another one that converts fahrenheit to celcius

function toCelc (fahr){
  return (fahr - 32) * 5/9
}
console.log(toCelc(50))

function toFahr(cel){

  return (cel * 9/5) + 32
}
console.log(toFahr(50))

// 4. Create a function that takes the length, width and height of a  cube and return it's volume

function volCalculator (a, b, c){
  return a * b * c
}

console.log(volCalculator( 10, 20, 15))

// 5. !BONUS!  Create a function that will take in a sentence as argument and capitalize the first letter of all it's words
//    You want to use split() to split the sentence into individual words and save them in an array