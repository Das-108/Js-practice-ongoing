// Fileter - return a new array, can manipulate the size of new array(unlike map), return based on condition

//Find - returns single instance (object), returns first match, if no match -> undefined

const people = [
    { name: 'bob', age: 20, position : 'developer' },
    { name: 'Krsna', age: 25, position : 'Supereme God' },
    { name: 'Balaram', age: 24, position : 'Anata sesa' },
    { name: 'Yshoda mai', age: 40, position : 'Mother' },
]

const fruits = ['orange', 'apple','pear', 'jack Fruit']
// filter
const youngPeople = people.filter((person) => {
    // if(person.age < 30) {
    //     return person
    // }
    return person.age < 30
})
const developers = people.filter((person) => person.position === 'developer')
// console.log(youngPeople)
// console.log(developers)

//no match
const seniorDevs = people.filter((items) => items.position === 'seniorDevs')
// console.log(seniorDevs)

// Find 
const krsna = people.find((person) => person.name === 'Krsna')
// console.log(krsna)

const favFruits = fruits.find((item) => item === 'jack Fruit')
// console.log(favFruits)

// no match of Find
const youngestPerson = people.find((person) => person.age < 20)
// console.log(youngestPerson)

// multiple matches - first match
const multipleMatch = people.find((person) => person.age < 35) 
console.log(multipleMatch)