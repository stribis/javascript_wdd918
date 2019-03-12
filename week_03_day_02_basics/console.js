console.log('I am logging this string to the console')



// Console groups help us keep our logs organised! 
console.group('Fruits')
console.log('apple')
console.log('pear')
console.log('banana')
console.log('orange')
console.groupEnd()

console.group('Numbers')
console.log(1)
console.log(2)
console.log(34)
console.log(55)
console.groupEnd()


// We can also create a group in a group

console.group('Students')
console.group('WDD917')
console.log('Andreas')
console.log('Daniel')
console.log('Marc')
console.groupEnd()
console.group('WDD918')
console.log('David')
console.log('David')
console.log('David')
console.groupEnd()
console.groupEnd()

// Errors

console.error('This is used for logging errors to the console!')

// Information

console.info('This is used for logging information to the console!')

// Warnings

console.warn('This is used to create warnings')

// Tables work very well for arrays
const myArr = ['Beans', 'Rice', 'Corn']
console.table(myArr)

const myObj = {
  cost: 'chf 22',
  weight: '6 kg',
  availability: '10 Units'
}
// Tables also work with objects
console.table(myObj)


// You can also have multiple columns

const names = [['Jane','Doe'],['John','Smith'],['James','Bond']]

// More info here https://developer.mozilla.org/en-US/docs/Web/API/Console/table

console.table(names[0], names[1])
// timers
let x = 0;
console.time()
for (let i = 0; i < 1000; i++) {
  x = i
}
console.timeEnd()


// stack tracer
function first(){
  return second()
}

function second(){
  return third()
}

function third(){
  return fourth()
}

function fourth(){
  console.trace()
}

first()