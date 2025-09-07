// reduce 
// iterates, callback function
// reduces to single value - number , array , object
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iteration/ value

const staff = [
    { name : 'bob', age: 20, position: 'developer', salary: 100},
    { name : 'ram', age: 25, position: 'desigener', salary: 300},
    { name : 'hari', age: 30, position: 'the boss', salary: 400},
    { name : 'madhava', age: 25, position: 'inter', salary: 10},
];

const dailyTotal = staff.reduce((total,person) => {
    console.log(total)
    console.log(person.salary)
    total += person.salary
    return total
},0)

console.log(dailyTotal)