/* You are a kid who needs to organize his room */
/**
 * everthing is a mess
 * Rearrange the room so that toys are in the toybox
 * Furniture is on the floor
 * Clothing is in the closet
 * and trash is in the trash
 */

/* USE SPLICE! */
var toybox = ['Action figure','Chewing gum wrapper' , 'Car', 'Lego', 'Hamburger leftovers', 'T-shirt']

var floor = ['Popcorn pieces', 'Toy airplane', 'Model train', 'Chair', 'Water bottle', 'Underwear']

var closet = ['Pants', 'Socks']

var trash = ['Old paper']


/**
 * When you are done, log all the arrays to the console!
 */


/* Items that need to be in toybox */
// from floor: 1, 2
var items = floor.splice(1, 2)
for(let i = 0; i < items.length; i++){
  toybox.push(items[i])
}

/* Items that need to be in closet */
// from toybox: 5
closet.push(toybox.splice(5,1)[0])
// from floor: 3
closet.push(floor.splice(3, 1)[0])
/* Items that need to be in trash */
// from toybox: 1, 3
items = [toybox.splice(1, 1)[0], toybox.splice(3, 1)[0]]
for(let i = 0; i < items.length; i++){
  trash.push(items[i])
}

// from floor: 0, 1
items = [floor.splice(0, 1)[0], floor.splice(1, 1)[0]]
for(let i = 0; i < items.length; i++){
  trash.push(items[i])
}
console.log('toybox', toybox)
console.log('floor', floor)
console.log('closet', closet)
console.log('trash', trash)