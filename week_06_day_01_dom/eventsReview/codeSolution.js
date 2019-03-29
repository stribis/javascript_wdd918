// If clicked
const tracker = document.querySelector('.tracker')
const buttons = document.querySelectorAll('button')
// click event
tracker.addEventListener('click', function(event){
  console.log('clicked the box')
  updateEventDetails(event)
  this.style.backgroundColor = '#'+ Math.floor(Math.random() * 1000);  
})

// double click event
tracker.addEventListener('dblclick', function(event){
  console.log('dbclicked the box')
  updateEventDetails(event)
  this.classList.toggle('rounded')
})

// on mouse enter
tracker.addEventListener('mouseenter', function(event){
  console.log('mouse has entered')
  updateEventDetails(event)
  this.classList.toggle('active')
})

// on mouse leave
tracker.addEventListener('mouseleave', function(event){
  console.log('mouse Left!')
  updateEventDetails(event)
  this.classList.toggle('active')
})


// on mouse move
tracker.addEventListener('mousemove', function(event){
  updateEventDetails(event)
})

buttons.forEach( element => {
  element.addEventListener('click', function(event) {
    console.log(event)
    updateEventDetails(event)
    clickedButton(event)
  })
})

document.addEventListener('keydown', function(event){
  console.log('last key pressed', event)
  document.querySelector('.lastKey').innerHTML = event.code
})

// input

document.querySelector('#field').addEventListener('input', function(event){
  document.querySelector('.inputVal').innerHTML = `<span class="bold">${this.value}</span> - And the last input was : (<span class="bold">${event.data}</span>)`
})

// update function

function updateEventDetails(event) {
  document.querySelector('.eventType').innerHTML = event.type
  document.querySelector('.eventTarget').innerHTML = event.target.className
  document.querySelector('.mouseX').innerHTML = event.x
  document.querySelector('.mouseY').innerHTML = event.y  
  document.querySelector('.offsetX').innerHTML = event.offsetX
  document.querySelector('.offsetY').innerHTML = event.offsetY


  // addtional formatting :

}


function clickedButton(event) {
 event.target.classList.toggle('clicked')
}


