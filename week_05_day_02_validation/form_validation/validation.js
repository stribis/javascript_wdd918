/* This code will validate a form an display any errors to the user  */
/**
 * The code is separated into functions to better organise it and utilize re-usable code
 * You could think of the code as having different parts
 * 
 * First part: Click event which will trigger when the button is clicked
 * 
 * Second part: A validation function which will be called after the click takes place and will validate
 * the input fields in the form
 * 
 * Third part: A function that will display any errors to the user
 * 
 * Fourth part: A function which will do something with the input data, if no errors are present
 */

// This is the click event listener which will trigger when the button is clicked
document.querySelector('form button').addEventListener('click', (e)=>{
  // Remember to enter the event object as a parameter of the callback function to have access to it
  // Having access to the event object (e) allows us to activate the preventDefault method
  // which stops page reload on button click
  e.preventDefault()

  // This deletes any spans in the form, if there are any present
  // We need this in order to remove any old errors in the form
  if(document.querySelector('span')){
    document.querySelectorAll('form span').forEach(element => {
      element.remove()
    })
  }

  // Now That we are ready, we can call validateForm which we defined just underneath this function
  validateForm()
})

/* Function to validate form data */
// We called this function validateForm because it's purpose is to validate the different input fields in the form
// You can be creative with your function names, but you should always be able to know what the purpose of a function
// is just by reading it's name
function validateForm(){
  // This empty objects will lates contain some information
  // the data object will contain all of our form data
  const data = {}
  // the validationErrors object will contain all of our errors ( if any )
  const validationErrors = {}

  // Lets populate our data object with information from the different inputs
  data.firstName = document.querySelector('#first-name')
  data.lastName = document.querySelector('#last-name')
  data.email = document.querySelector('#email')


  // Now that we have our data we can start validating, for first name and last name we will just test if the field is empty

  // First Name
  if(!data.firstName.value){
    // If the field is empty, we need to create an error
    console.error('No first name')
    // lets save the error to the validationErrors object by making a new property (firstName) and assigning it a value
    validationErrors.firstName = 'No first name provided';
  }else{
    // This is in case there are no errors, If we wanted to validate anything else (ex. the length of the input) then we would
    // do that here
    // for now, lets just create a console.info so that we as developers know that this step worked
    console.info('First Name present')
  }
  
  // Last Name
  // Same thing here!, just rename your variables
  if(!data.lastName.value){
    console.error('No last name')
    validationErrors.lastName = 'No last name provided';
  }else{
    console.info('Last Name present')
  }

  /* Email */
  // Starts the same way, first we check if it is empty
  if(!data.email.value){
    console.error('no email')
    validationErrors.email = 'No email provided';
    // if it is we create an error informing the user the field is empty
  }else{
    // Otherwise, the email is not empty BUT we still should test if it is an email
    console.info('Email present')
    // We test if it is an email useing regular expressions
    // There are a lot of regular expressions out there, as per HTML5 specifications, we should use this ones
    let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // We test() our expression against a string, which will return true if there is a match, and false if they do not match
    if(!emailRegExp.test(data.email.value)){
      // If the email is NOT a match, then we need to create an error
      // We use the same property, since we know that the field is not empty anyway
      validationErrors.email = 'Invalid email address'
    }
  }

  // It's time to call our functions now, if we have errors, then we should call the function responsible of 
  // displaying them in the document
  // If there are no errors, then we can send our form

  // We check if the errors object is empty
  if(Object.keys(validationErrors).length > 0 ){
    console.log( 'error' )
    // if it is empty then we call displayErrors passing our errors and data objects, which the function will need
    displayErrors (validationErrors, data)
  }else{
    // otherwise we call our sendForm object, we only need to pass the data here
    console.log('no error')
    sendForm(data)
  }

}

// Display Errors function
// This function will check which errors are present
function displayErrors (errors, data) {
  // If there is a firstName Error, then we can call a function which will create an element and insert it into the HTML
  if(errors.firstName){
    createAfter(data.firstName, errors.firstName)
  }
  // Same with the other errors
  if(errors.lastName){
    createAfter(data.lastName, errors.lastName)
  }
  if(errors.email){
    createAfter(data.email, errors.email)
  }
}

// This createAfter function, works together with the displayError Function. If the displayError function notices that an 
// error is present, then it will call this function which the specific error and give us the input which we will use as a 
// reference to insert our element after
function createAfter (reference, message) {
  // first we create the span
  let errorBox = document.createElement('span')
  // then we insert some content into the span, in this case the error message
  errorBox.innerHTML = message
  // lastly we insert the span AFTER the reference point
  /* THANKS Simon for telling me about this method */
  reference.after(errorBox)
}

// This function will be called if there are no validation errors and the data can be sent
function sendForm(data){
  document.querySelector('form').style.display = 'none'
  let box = document.createElement('div')
  box.className = 'mybox'
  // An important note here
  // when we finally handle the data of the form, it's a good idea to trim() it first
  // This will remove any unwanted spaces, before or after the data
  box.innerHTML = `  
  <ul>
    <li><h3>Form data sent to the server</h3></li>
    <li>First Name: ${data.firstName.value.trim()} </li>
    <li>Last Name: ${data.lastName.value.trim()} </li>
    <li>Email: ${data.email.value.trim()} </li>
  </ul>
  `
  document.querySelector('body').appendChild(box)
}