// spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// split into single items and COPY them

const udemy = 'udemy'
console.log(...udemy)
const boys = ['join','peter','bob']
const girls = ['susan', 'anna']

const bestFriend =  'arnold'

const friends = [...boys,bestFriend,...girls]

console.log(friends) // multiple array can be made into single array

// refrence 
//copy
const newFriends = [...friends]
newFriends[0] = 'nancy'
console.log(friends)
console.log(newFriends)

//ES2018 - Es-8 Objects

const person = { name: 'john' , job: 'developer'}
const newPerson = {...person,city:'kathamndu',name: 'krsna'} // can change the value of objects
console.log(friends)