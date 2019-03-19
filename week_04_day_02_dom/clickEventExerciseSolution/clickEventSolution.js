// Adding an element
let counter = 0;

document.getElementById('add').addEventListener('click',createLi)

function createLi (){
  counter ++
  const li = document.createElement('li')
  li.innerHTML = `This is an item # ${counter}` 
  document.querySelector('ul').appendChild(li)
 
}


// Removing and element with button

document.getElementById('remove').addEventListener('click',removeLi)

function removeLi (){
  counter --
  const li = document.querySelector('li:last-child')
  li.remove()
}


// removing an element by clicking it
// Put this in the function
// document.querySelectorAll('li').forEach(element => {
//   element.addEventListener('click',function(){
//     element.remove()
//   })
// });


