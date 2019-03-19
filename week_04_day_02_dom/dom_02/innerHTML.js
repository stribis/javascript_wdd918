/**
 * Replacing content
*/

/* Replacing contentin js can be done in different ways, but the first thing you always need to do is to 
select an elements */
/* In this case we use querySelector to select the last child of <a> in an unordered list 
-> this is the same selection we would use in CSS!
*/
const item = document.querySelector('nav ul li a:last-child')
/* If you want to make sure you selected the correct element, just use console.log */
console.log(item)
/* We can change what is between the two tags by changing the innerHTML property of a selected element */
item.innerHTML="My little Pony"


/* Creating new element */
/* Creating a new element involves a couple of steps */
/* First we need to create an element and save it to a variable, 
In this case we created a <p> element an saved it into the variable newElement
*/
const newElement = document.createElement('p');
/* Next we can give the element a bit of content
innerHTML is perfect for this!
 */
newElement.innerHTML = "I am new here!"

/* Finally we need to include the newly created element into the document, we do this by selecting an already 
existing element in the DOM, for exaple this article tag, and then appending the new element as a child */
document.querySelector('article').appendChild(newElement)
/* Append child will make newElement a child element of article, and add it to the end */
/* Setting an attribute */

/* Sometimes we also need to change the attribute of an element, this is fairly simple with the setAttribute method */
/* The setAttribute method lets us create a new attribute and give it a value */
/** here is the syntax:
 * elementYouWantToChange.setAttribute('attributeYouWishToChange', 'value of the attribute')
 */
item.setAttribute('href', 'http://sae.ch')
item.setAttrubute('style', 'color:red; font-weight:bolder;')


