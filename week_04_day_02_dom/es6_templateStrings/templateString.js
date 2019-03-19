// With template strings we can easily concatenate strings using variables,
// however, it is no longer called concatenation, but interpolation.
// IMPORTANT: browser needs to support ES6 ( ECMA Script 2015 )


// something that was very annoying before, is now very simple an a lot nicer
/*
    Lets define a couple of variables which we will use throughout this example
*/
let firstName = 'Princess',
lastName = 'Zelda', 
middleName = 'of Hyrule'

let qty = 3,
item = 'empty jar',
price = 50,
shop = "Beedle's Shop Ship"

// An example that used to look like this:
console.log(lastName + ", " + firstName + " of " + middleName)

//Can now look like this
console.log(`${lastName}, ${firstName} of ${middleName}`)
/* Not convinced, no worries, lets make something a bit more complex */
console.clear()
// The following is a template for a letter that a shop sends to a costumer when they buy a product
// We can use interpolation to make some of the content in the letter dynamic
let msg = `
Hello ${firstName},

Thanks for purchasing ${qty} ${item}(s),

Order Details:
  ${firstName} ${lastName} ${middleName}
  ${qty} x $${price} = $${qty * price} of ${item}

You can pick up your items at will!

Thanks,
${shop}

`
console.log(msg)
console.clear()

/* We can also add HTML code an create HTML templates with template strings */
// HTML Code!
let myHTML = `
<section>
  <header>
    <h1>${shop}</h1>
  </header>
</section>
`

const myElement = document.querySelector('body')

myElement.innerHTML = myHTML