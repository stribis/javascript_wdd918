/* In js we can listen for certain user actions using the addEventListener method */

/**
 * For this exercis you will need the click event listener which will call a function when a click on a certain element
 * takes place
 */

/* Syntax : 

element.addEventListener('click', function(){
  console.log('someone clicked')
})
The anonymous function which is given as a parameter of the event listener is known as a callback function
because it will automatically be called when something else takes place

You can also use declared functions as callback functions, which would look like this:

element.addEventListener('click' myfunction())

function myfunction(){
  console.log('someone clicked)
}
*/

/*  
    Using this information, you now have to create some code using the given HTML file 
    This file contains 2 buttons 
    If the add button is clicked then a new <li> should be added to the <ul> in the document
    If the remove button is clicked then an existing <li> should be removed from the <ul> in the document.

    Additionally we want to have a counter: 
    The first <li> should say Item 1, the second Item 2, the third Item 3 and so on...

*/
