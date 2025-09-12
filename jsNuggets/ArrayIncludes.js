// Array includes() - checks if the item is an array,,it is useful in the conditional statements

const groceries = ['milk','Bread', 'chapati']

let randomItem = 'lemon'
randomItem = 'milk'

const isIncluded = groceries.includes(randomItem)
console.log(isIncluded)

if(groceries.includes(randomItem)) {
    console.log(`Yeah the item is on the list`)
}