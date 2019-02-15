/**
 * Fix this list
 * 
 * The names in this list should be all lowercase except for their first letter which
 * should be capitalized
 * Create a new array with the correct data
 */

var students = ['luCa', 'rEZa', 'ChiN', 'meliSSA', 'NoAH']
var result = []
for (let i = 0; i < students.length; i++) {
  var smallStudents = students[i].toLowerCase();
  result.push(smallStudents[0].toUpperCase() + smallStudents.slice(1))
}
console.log(result)
/**
 * The following data is corrupted
 * We know that the data we need is correct after the ;
 * Create a new array with the correct data
 */

var cities = ['MAN675847583748sjt567654;London',
'GNF576746573fhdg4737dh4;New York',
'LIV5hg65hd737456236dch46dg4;Madrid',
'SYB4f65hf75f736463;Cairo',
'HUD5767ghtyfyr4536dh45dg45dg3;Tokyo'];

var result1 = []
for (let i = 0; i < cities.length; i++) {
  var wordPos = cities[i].indexOf(';') + 1
  var city = cities[i].slice(wordPos)

  result1.push(city)
}
console.log(result1)