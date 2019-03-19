/**
 * It has been a while,
 * let's see if you remember what we saw in the first 3 weeks
 * Just follow the instructions
*/

/**
 * 1. Create an object and save it in a variable called person
 * This object should have the following properties and values:
 * name -> object -> first  -> John
 *                -> last   -> Smith
 * age  -> 54
 * hobbies -> array -> Golf, Reading and Swimming
 * greeting -> function -> log to the console the following sentence: 'My name is <first name> <last name> and I am <age> years old'
 * books -> array -> object -> author -> J.K Rowling
 *                             name   -> Harry Potter
 *                   object -> author -> Stephen King
 *                          -> name   -> Pet Sematary
 *                   object -> author -> Herman Melville
 *                          -> name   -> Moby Dick
 * social -> function -> log to the console the following sentence: 'My favorite book is <Second book name> by <Second book author>'
*/ 

var person = {
  name: {
    first: 'John',
    last: 'Smith'
  },
  age: 52,
  hobbies: ['Golf', 'Reading', 'Swimming' ],
  greeting: function() {
    console.log('My name is ' + this.name.first + ' ' +this.name.last + ' and I am ' + this.age + ' years old')
  },
  books: [
    {
      author: 'J.K Rowling',
      name:   'Harry Potter'
    },
    {
      author: 'Stephen King',
      name:   'Pet Sematary'
    },
    {
      author: 'Herman Melville',
      name:   'Moby Dick'
    },
  ],
  social: function(){
    console.log('My favorite book is' + this.books[1].name + ' by ' + this.books[1].author)
  }
}

/**
 * 2. Create a function
 * This function takes in a string as a parameter
 * The function the transforms all the characters in the string making them lower case
 * If the string has any character 'o' it is to be removed
 * The result is to be returned by this function
 * log the result of the function to the console using the sentence : The quick brown fox jumps over the lazy dog
*/

function byebyeO(sentence){
  var small = sentence.toLowerCase();
  if( small.indexOf('o') > -1 ){
    small = small.replace('o', '')
  }
  return small
}

console.log(byebyeO('The quick brown fox jumps over the lazy dog'))

/**
 * 3. Create a function that takes in a number
 * This function will check if the number is an even or an odd number
 * If it is an even number then we should get a GREEN console log with the following message: 'Your number: <number>, is even' 
 * If it is an odd number then we should get an ORANGE console log with the following message: ' Your number <number>, is odd'
 * BONUS: Create a function that takes in a number. If the number is prime, log the following message to the console : 'Your number: <number>, is prime! 
 *        If it isnt a prime then log ? 'Your number: <number>, is not prime!  
*/

function evenOdds(num){
  if( num % 2 == 0){
    console.log( '%cYour number: ' + num + ' is even', 'color: green')
  }else{
    console.log( '%cYour number: ' + num + ' is odd', 'color: red')
  }
}

evenOdds(4)
evenOdds(6)
evenOdds(7)

function isPrime(num) {
  for(var i = 2; i < num; i++){
    if(num % i === 0){
      return console.log('Your Number: '+ num +' is not a prime');
    }
  }
  return console.log('Your number ' + num + ' is prime!')
}

isPrime(7)


/**
 * 4. Using your object from before , list all of John's books  names and authors into a console table to get a better perspective
 * - John got a new book for his birthday.
 *   Add a new book to john's library: Great Expectations by Charles Dickens
 * - John has been very busy reading his books and has lost interest in some of his hobbies, remove golf and swimming from his hobbies
 *   Add two new item's to John's hobbies: Book Club and Writing
**/

person.books.push({
  author: 'Charles Dickens',
  name: 'Great Expectations'
})

person.hobbies.pop()
person.hobbies.shift()

person.hobbies.push('Book Club', 'Writing')

console.table(person.books)
console.table(person.hobbies)

/**
 * 5. John is now a writer, but he is a terrible one, he does not use punctuation ( . ! , )
 * add a method to the person object which takes in a sentence and removes all it's punctuation!
 * 
*/

person.write = function(sentence){
  sentence = sentence.replace('.', '')
  sentence = sentence.replace('!', '')
  sentence = sentence.replace(',', '')
  return sentence
}
console.log(person.write('Hello, my name is Steve. I am the president of Cambury!'))


console.table(person)