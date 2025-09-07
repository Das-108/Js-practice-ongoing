const people = [
    {
        name: 'bob',
        age: 20,
        position: 'developer'
    },
    {
        name: 'anna',
        age: 25,
        position: 'desigener'
    },
    {
        name : 'susy',
        age: 30,
        position: 'the boss'
    },
    {
        name : 'Krsna',
        age: 16,
        position: 'the CEO'
    },
];






const ages = people.map((person) => {
    // console.log(person)
    return person.age *2
})
// console.log(ages)

const newPeople = people.map((items) => {
    return {
        firstName: items.name.toUpperCase(),
        oldAge: items.age + 20,
    }
}) 

console.log(newPeople)

const names = people.map((person) =>  `<h2>${person.name}</h2>`)
const result = document.getElementById('result')

result.innerHTML = names.join('')