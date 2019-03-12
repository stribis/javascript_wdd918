/**
 *  GUESS MY NUMBER ! 
 */

// The user will INPUT either a number or a word 
// if the input is a number between 0 and 7 :
  // if the number is 0
    // ==> 'You are way off'
  // if the number is 1, 2 or 3
    // ==> 'You have to go higher'
  // if the number is between 4,5,6
    // ==> 'A bit higher'
  // otherwise
    // ==> 'You got it'
// if the input is text, do the same but using words : one, two, three, four, five, six, seven
var number = prompt('Select a number between 0 and 7')
switch( number ){
  case '0':
  case 'zero':
    alert('You are way off')
  break;
  case '1':
  case 'one': 
  case '2':
  case 'two':
  case '3':
  case 'three':
    alert('You have to go higher')
  break;
  case '4':
  case 'four': 
  case '5':
  case 'five':
  case '6':
  case 'six':
    alert('A bit higher')
  break;
  case '7':
  case 'seven':
    alert('You got it')
  default:
    alert('You did not input a correct value')
}