/* Element Selection */

/* ID selection */

const idSelection = document.getElementById('sometext')

console.log(idSelection)
idSelection.style.color = 'red';

idSelection.style.backgroundColor = 'gold';

/* Class Selection */

const classSelection = document.getElementsByClassName('lab')

console.log(classSelection)

classSelection[0].style.color = "purple"
classSelection[1].style.color = "pink"
classSelection[2].style.color = "aqua"
classSelection[3].style.color = "lime"


/* Selecting Elements by Tag Name */

const tagSelection = document.getElementsByTagName('main');

tagSelection[0].style.backgroundColor = "red"


/* Query Selector */
/* Return the first Element only */

console.log(document.querySelector('.lab'))
document.querySelector('.lab').style.backgroundColor ="blue"

/* Query Selector ALL */
/* Return all the instances of a query */

console.log( document.querySelectorAll('p'))

//document.querySelectorAll('p')[1].style.textDecoration = 'underline';



document.querySelectorAll('p').forEach( element => {
  element.style.textDecoration = 'underline';
})