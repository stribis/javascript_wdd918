/* Element Selection */
/* There are multiple ways of selecting elements in the DOM */

/* ID selection */
/* This selector will select the first element with the given ID */
/* If your HTML is valid, you should not have multiple equal ID's in the same page anyway*/
const idSelection = document.getElementById('sometext')
/* There absolutely no need to put the #, since we already specified we are selecting an ID */
console.log(idSelection)
/* the .style property lets use change or add styles */
idSelection.style.color = 'red';
/* IMPORTANT: If the property you which to change has 2 words like background-color */
/* It should be writen in camelCase: backgroundColor. The - in js is an operator! */
idSelection.style.backgroundColor = 'gold';

/* Class Selection */
/* This will select all the instances of the given class and return an array of elements */
/* IMPORTANT! This will return an array regardless of there being only one element with the lab class! */
const classSelection = document.getElementsByClassName('lab')
/* There is no need to use the '.', we already specified that we are selecting a class */
console.log(classSelection)
/* Handle the selection as an array to iterate through the elements */
classSelection[0].style.color = "purple" //first element with the class lab
classSelection[1].style.color = "pink" //second element with the class lab
classSelection[2].style.color = "aqua" //third element with the class lab
classSelection[3].style.color = "lime" //fourth element with the class lab


/* Selecting Elements by Tag Name */
/* As with classes, this selection will give you an array of elements back even if there is only 1 element with that 
tag name in the whole document
 */
const tagSelection = document.getElementsByTagName('main');
tagSelection[0].style.backgroundColor = "red"


/* Query Selector */
/* This is a very versitile selection method that let's us use CSS queries  */
/* Query selector will only return ONE ELEMENT ( the first one found ) */

console.log(document.querySelector('.lab'))
document.querySelector('.lab').style.backgroundColor ="blue"
/* So even thought there are multiple elements with the class lab, this selector will only select the
first one in the document
 */


/* Query Selector ALL */
/* This selector functions a bit different to querySelector, it still lets you use CSS queries
but it will return ALL the elements with that query and not just one
This meanst that, as is the case with the class selector, the querySelectorAll will return an array
*/

console.log( document.querySelectorAll('p'))
document.querySelectorAll('p')[1].style.textDecoration = 'underline';


/* Remember we can use loops to iterate through arrays, if we want to give all the 'p' elements an underline
then we have to iterate through our Array 
We can do this very easily using the forEach loop
*/
document.querySelectorAll('p').forEach( element => {
  element.style.textDecoration = 'underline';
})

/* What if we want to do more than just change the style of an element. */
/* open up this console.log in the console console.log( document.querySelectorAll('p')) 
go into one of the elements -> you can see that it is an object with multiple properties and methods!
One of the properties is style, but there are more, like innerHTMl which lets us assign the content that goes 
between two tags :
*/
var myheader = document.querySelector('h1')
myheader.innerHTML = 'Hello World'