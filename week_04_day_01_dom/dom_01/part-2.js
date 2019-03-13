/**
 * Replacing content
*/


const item = document.querySelector('nav ul li a:last-child')

console.log(item)

item.innerHTML="My little Pony"
item.setAttribute('href', 'http://sae.ch')

/* Creating new element */

const newElement = document.createElement('p');
newElement.innerHTML = "I am new here!"

document.querySelector('article').appendChild(newElement)

