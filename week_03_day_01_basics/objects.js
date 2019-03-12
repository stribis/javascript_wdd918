/* JavaScript Objects */

// To define an object we use the { } brackets
var studentObj = {};
console.log(student)
// In this case studentObj is an empty object


// lets make a complete object
// This object has multiple names(keys) which all have values

var student = { 
  // The name name has the value 'Martin'
  name : 'Martin',
  // The name age as the value 27 and so on..
  age : 27,
  eyeColor : 'green'
  // A name and a value are known as a name value pair!
  // These are also refered to as Properties
};
// You can call a property value using the [ ] bracket or the . dot notation
console.log(student['name'])
console.log(student.name)

var student = { 
  //name : ['Martin', 'Hutchings'],
  name: {
    firstName : 'Martin',
    lastName : 'Hutchings'
  },
  age : 27,
  eyeColor : 'green',
  message: function(){
    alert('Hello my name is '+ this.name.firstName +' and I am ' + this.age + ' years old!')
  }
};

//console.log(student['name'])
//console.log(student.name.firstName)

// To set a value you need to access it's name
student.eyeColor = 'pink';

//console.log(student)

// A lot of things in JS ara actually Objects under the hood
var myArray = new Array;
console.log(myArray)