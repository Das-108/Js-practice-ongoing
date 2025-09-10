// faster/easier way to access /unpack varaiables form arrays, objects

const fruits = ['orange','banana','lemon'];
const friends = ['john','peter','bavaman','aychuta','keshava'];

const fruits1 = fruits[0]
const fruits2 = fruits[1]
const fruits3 = fruits[2]

// console.log(fruits1,fruits2,fruits3)


const [enemy, ,bob,kelly, susan] = friends

// console.log(enemy, bob, kelly,susan)

//swaping using array destructring

let first = 'bob'
let second = 'john'

// let temp = second;
// second = first
// first = temp
[second,first] = [first,second]

console.lof(first , second)