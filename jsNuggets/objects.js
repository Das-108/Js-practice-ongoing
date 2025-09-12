// Three methods to convert objects into arrays
// Object.keys() -converts property names into array
// Object.values() - converts property values into array
// Object.entries() - converts bot

const person = {
    name : 'gauranga',
    age: 25,
    status : 'god',
}
const result = Object.entries(person)

//map method

const newResult = result.map((item) => {
    const [first, second] = item;
    console.log(first,second)
    return first
})

console.log(newResult)

// for of
for (const [first, second] of result) {
    console.log(first, second)
}