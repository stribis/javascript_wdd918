/**
 * Swich is another way of writing conditionals
 * This is the basic syntax
 
  switch (expression) {
    case choice1:
      run this code
      break;

    case choice2:
      run this code instead
      break;
      
    // include as many cases as you like

    default:
      actually, just run this code
}
*/


// Let us ask a user how he is feeling
var choice = 'happy'; //prompt('how are you feeling (happy, scared, surprised, excited)')
var message;
// In the switch brackets we need to put our statement, the codition we which to give the case scenarios
switch (choice) {
  // In the different case we check if something is the same as the value we put in the switch statement
  case 'happy':
    // If the case is true ( in this case 'choice' needs to be 'happy' which happens to be true) 
    // then code in the 'case: ' is processed
    // in this case, we just assign the a string to the variable 'message'
    message = 'How could you not be happy? We are coding!.';
    // Then we break, meaning we get out of the switch statement, ignoring ALL other cases
    break;
  case 'scared':
    message = 'Come on, cheer up, this is only the beginning.';
    break;
  case 'surprised':
    message = 'Yes I know, this is amazing.';
    break;
  case 'excited':
    message = 'Me too!';
    break;
  // default is basically the case that will run if, and only if NONE of the other cases were true
  default:
    message = 'You did not chose a correct term';
}

alert(message)
// Expected output is :
// 'How could you not be happy? We are coding!.'


/**
 * Multiple cases
 */
var Animal = 'Giraffe';
switch (Animal) {
  // This is basically the samme as saying :
  // if (Animal ==  'Cow' || 'Giraffe' || 'Dog' || 'Pig'){ do something }
  // else if Animal == 'Dinosaur' { do something else }
  // else { none of the case were true }
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal will go on Noah\'s Ark.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal will not.');
}