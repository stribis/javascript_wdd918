/** 
 * 1: Organize the array 'disorder' into 3 separate variables: odds, evens and words
 **/ 
var disorder = [2, 'chicken', 4, 5, 15, 'apple', 100, 25, 'lettuce', 'beans', 90, 33, 21, 3, 'pears', 34, 21, 'orange', 'pork']

var odds = [];
var evens = [];
var words = []

/**
 * 2: 'words' is the contents of a vegetarians fridge, she does not eat meat!
 * Get rid of all non-vegi items in the words array and throw them in the trash array
 **/ 

var trash = []


/**
 * 3: Show the contents of the arrays 'odds', 'evens', 'fridge', and 'trash'  
 * to the console
 */

// Our first step is to iterate through the array, since we need to be able to
// manipulate all of it's values
for( let i = 0; i < disorder.length; i++){
  if( isNaN(disorder[i]) ){
    // We ask if the current item in this array iteration is not a number
    // If the item is not a number then we can go ahead an push it into the words array
    words.push(disorder[i])
  }else{
  // else in this case means that the item IS a number, which leads us to the next step
  // we need to figute out if it is even or odd
  // for this we use the modulo operator. We know if a number % 2 is 0, the number is 
  // an even number, since dividing even numbers by 2, is never going to give us a rest
    if( disorder[i] % 2 == 0){
      // So if the current item % 2 == 0, the item is EVEN
      // and we push it into the evens array
      evens.push(disorder[i])
    }else{
      // Otherwise it HAS to be ODD
      // so we push it into the odds array
      odds.push(disorder[i])
    }
  }
}

/*  We also need to remove all words that have something to do with meat from the 
    words array and put them into the trash array, they just happen to be at 
    the start and the end of the array so we can simply use pop and shift
*/
// words.pop() takes the last item out of the words array, and we push into trash with
// trash.push()
trash.push(words.pop())
// words.shift() takes the first item out of the words array, and we push into trash with
// trash.push()
trash.push(words.shift())

/**
 * Last but not least our console.logs, to make sure we did everything correctly
 */
console.log('The even numbers:', evens)
console.log('The odd numbers:', odds)
console.log('The words:', words)
console.log('The trash full of meat:', trash)